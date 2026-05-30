import { Resend } from 'resend'

const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || 'mander.anshuman@gmail.com'
const MAX_BODY_BYTES = 10_000
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5

type ContactPayload = {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
  website?: unknown
}

type RateLimitEntry = {
  count: number
  resetAt: number
}

const rateLimit = new Map<string, RateLimitEntry>()

function jsonResponse(message: string, status: number) {
  return Response.json({ message }, { status })
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) return forwardedFor.split(',')[0]?.trim() || 'unknown'

  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

function checkRateLimit(ipAddress: string) {
  const now = Date.now()
  const currentEntry = rateLimit.get(ipAddress)

  if (!currentEntry || currentEntry.resetAt <= now) {
    rateLimit.set(ipAddress, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return true
  }

  if (currentEntry.count >= RATE_LIMIT_MAX_REQUESTS) return false

  currentEntry.count += 1
  return true
}

function isSameOriginRequest(request: Request) {
  if (process.env.NODE_ENV !== 'production') return true

  const origin = request.headers.get('origin')
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')

  if (!origin || !host) return false

  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

function toCleanString(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return ''
  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength)
}

function toCleanMessage(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function validatePayload(payload: ContactPayload) {
  const name = toCleanString(payload.name, 80)
  const email = toCleanString(payload.email, 254).toLowerCase()
  const subject = toCleanString(payload.subject, 120)
  const message = toCleanMessage(payload.message, 2_000)
  const website = toCleanString(payload.website, 120)

  if (website) return { ok: false as const, reason: 'Spam check failed.' }
  if (!name || !email || !subject || !message) {
    return { ok: false as const, reason: 'Please complete all required fields.' }
  }
  if (!isValidEmail(email)) {
    return { ok: false as const, reason: 'Please enter a valid email address.' }
  }

  return {
    ok: true as const,
    data: {
      name,
      email,
      subject,
      message,
    },
  }
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return jsonResponse('Unable to send your message right now.', 403)
  }

  const contentType = request.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return jsonResponse('Unable to send your message right now.', 415)
  }

  const contentLength = Number(request.headers.get('content-length') || 0)
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse('Your message is too large to send.', 413)
  }

  const ipAddress = getClientIp(request)
  if (!checkRateLimit(ipAddress)) {
    return jsonResponse('Please wait before sending another message.', 429)
  }

  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return jsonResponse('Unable to send your message right now.', 400)
  }

  const validation = validatePayload(payload)
  if (!validation.ok) return jsonResponse(validation.reason, 400)

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.RESEND_FROM_EMAIL
  ) {
    return jsonResponse('The contact form is not configured yet.', 503)
  }

  const { name, email, subject, message } = validation.data
  const resend = new Resend(process.env.RESEND_API_KEY)
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeSubject = escapeHtml(subject)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  try {
    const { error } = await resend.emails.send({
      from: `Anshy's World <${process.env.RESEND_FROM_EMAIL}>`,
      to: [CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        message,
      ].join('\n'),
      html: `
        <div>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend contact form error:', error)
      return jsonResponse('Unable to send your message right now.', 502)
    }

    return Response.json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact form error:', error)
    return jsonResponse('Unable to send your message right now.', 500)
  }
}
