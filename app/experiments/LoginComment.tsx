'use client'

import {
  currentUser,
  SignedIn,
  SignedOut,
  SignInButton,
  useUser,
} from '@clerk/nextjs'
import { revalidatePath } from 'next/cache'
import React, { useRef } from 'react'
import { createComment } from '../comments'

type Props = {}

export default function LoginComment({}: Props) {
  const formRef = useRef<HTMLFormElement>(null)
  const user = useUser().user
  async function comment(formData: FormData) {
    if (!user) return
    await createComment(
      user.id,
      user.firstName || '',
      user.imageUrl,
      formData.get('comment') as string,
    )
    formRef.current?.reset()
  }

  return (
    <div>
      <SignedIn>
        <form
          id="comment-form"
          //   @ts-ignore
          action={comment}
          ref={formRef}
          className="mx-auto flex flex-row gap-x-3"
        >
          <input
            type="text"
            placeholder="Add a comment"
            name="comment"
            required
            className="w-3/5 rounded-sm border-b border-[#242424] bg-slate-100/10 px-2 py-2 text-gray-500 placeholder-gray-500 outline-none transition-all focus:border-[var(--secondary)] focus:text-gray-300 hover:border-[var(--secondary)]"
          ></input>
          <button
            type="submit"
            className="rounded-sm bg-[var(--secondary)] px-2 text-[var(--primary)]"
          >
            Comment
          </button>
        </form>
      </SignedIn>
      <SignedOut>
        <SignInButton
          afterSignInUrl="/experiments"
          mode="modal"
          redirectUrl="/"
        >
          <button className="rounded-sm bg-[var(--secondary)] p-2 text-xs md:text-sm">
            Sign in to comment
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  )
}
