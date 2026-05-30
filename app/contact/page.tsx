'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
  website: string
}

type SubmitStatus = 'idle' | 'success' | 'error'

const inputClasses =
  'w-full rounded-sm border border-transparent border-b-[#343130] bg-slate-100/10 px-3 py-3 text-sm text-[var(--primary)] outline-none transition-all placeholder:text-gray-500 hover:border-b-[var(--secondary)] focus:border-[var(--secondary)] focus:bg-slate-100/[0.13] md:text-base'

const errorClasses = 'mt-1 text-left text-xs text-[#ffad91]'

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className={errorClasses}>{message}</p>
}

function Contacts() {
  return (
    <div className="w-[min(100%,22rem)] max-w-2xl text-center sm:w-full">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 rounded-sm bg-[var(--secondary)]"></div>
        <p className="max-w-[14rem] text-[0.65rem] uppercase tracking-[0.18em] text-[var(--primary)]/70 sm:max-w-none">
          Or feel free to reach out at
        </p>
        <div className="h-px flex-1 rounded-sm bg-[var(--secondary)]"></div>
      </div>

      <div className="mx-auto mt-4 flex w-full max-w-full flex-wrap items-center justify-center gap-4 rounded-sm border border-[var(--secondary)] px-4 py-3 sm:w-fit sm:px-6">
        <Link
          title="Linkedin"
          href="https://www.linkedin.com/in/anshuman-mander-7b3137193/"
          target="_blank"
        >
          <AiFillLinkedin className="h-6 w-6 text-[var(--primary)] transition-colors hover:text-[var(--secondary)] md:h-7 md:w-7" />
        </Link>
        <Link
          title="Github"
          href="https://github.com/AnshSAMA?tab=repositories"
          target="_blank"
        >
          <AiOutlineGithub className="h-6 w-6 text-[var(--primary)] transition-colors hover:text-[var(--secondary)] md:h-7 md:w-7" />
        </Link>
        <Link
          href="mailto:mander.anshuman@gmail.com"
          className="min-w-0 break-all text-xs font-thin transition-colors hover:text-[var(--secondary)] md:text-sm"
        >
          mander.anshuman@gmail.com
        </Link>
      </div>
    </div>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [serverMessage, setServerMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      website: '',
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setStatus('idle')
    setServerMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = (await response.json().catch(() => null)) as {
        message?: string
      } | null

      if (!response.ok) {
        setStatus('error')
        setServerMessage(
          result?.message || 'Unable to send your message right now.',
        )
        return
      }

      setStatus('success')
      setServerMessage('Thanks, your message has been sent.')
      reset()
    } catch {
      setStatus('error')
      setServerMessage('Unable to send your message right now.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[min(100%,22rem)] max-w-2xl space-y-4 text-left sm:w-full"
      noValidate
    >
      <div className="flex items-center gap-3 text-center">
        <div className="h-px flex-1 rounded-sm bg-[var(--secondary)]"></div>
        <p className="max-w-[14rem] text-[0.65rem] uppercase tracking-[0.18em] text-[var(--primary)]/70 sm:max-w-none">
          Send me a quick message below.
        </p>
        <div className="h-px flex-1 rounded-sm bg-[var(--secondary)]"></div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Name"
            className={inputClasses}
            aria-invalid={Boolean(errors.name)}
            {...register('name', {
              required: 'Your name is required.',
              maxLength: {
                value: 80,
                message: 'Please keep your name under 80 characters.',
              },
            })}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Email"
            className={inputClasses}
            aria-invalid={Boolean(errors.email)}
            {...register('email', {
              required: 'Your email is required.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address.',
              },
              maxLength: {
                value: 254,
                message: 'Please keep your email under 254 characters.',
              },
            })}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Subject"
          className={inputClasses}
          aria-invalid={Boolean(errors.subject)}
          {...register('subject', {
            required: 'A subject is required.',
            maxLength: {
              value: 120,
              message: 'Please keep your subject under 120 characters.',
            },
          })}
        />
        <FieldError message={errors.subject?.message} />
      </div>

      <div>
        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Message"
          className={`${inputClasses} min-h-40 resize-y leading-6`}
          aria-invalid={Boolean(errors.message)}
          {...register('message', {
            required: 'A message is required.',
            maxLength: {
              value: 2000,
              message: 'Please keep your message under 2,000 characters.',
            },
          })}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {serverMessage && (
        <p
          className={`text-sm ${
            status === 'success' ? 'text-[var(--primary)]' : 'text-[#ffad91]'
          }`}
          role="status"
        >
          {serverMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-sm bg-[var(--secondary)] px-4 py-3 text-sm font-bold uppercase tracking-wide text-[var(--background)] transition-all hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--background)] disabled:cursor-not-allowed disabled:opacity-60 md:py-4"
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0, 0, 0, 0, 0.2, 0.4, 1], y: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen px-6 sm:px-5"
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col items-center justify-center py-8 text-center md:py-12">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="inline-flex max-w-full flex-col items-center py-1">
            <h4 className="mx-auto max-w-full px-2 text-center text-base leading-snug text-[var(--primary)] md:text-2xl">
              Want to get in touch with me?
            </h4>
            <div className="h-0.5 w-full rounded-sm bg-[var(--secondary)]"></div>
          </div>

          <ContactForm />
          <Contacts />
        </div>
      </div>
    </motion.div>
  )
}
