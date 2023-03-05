'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Navbar from '../navbar'

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:mander.anshuman@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`
  }

  return (
    <div>
      <Navbar active="contact" />
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-semibold uppercase tracking-widest text-[var(--primary)]">
          Contact
        </h3>
        <div className="flex flex-col space-y-10">
          <h4 className="text-center text-2xl  text-[var(--primary)]">
            Here&apos;s a few ways to get in contact with me!!
          </h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-fit flex-col space-y-2"
          >
            <div className="flex space-x-2">
              <input
                {...register('name')}
                placeholder="Name"
                className="contactInput"
                type="text"
              />
              <input
                {...register('email')}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register('subject')}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register('message')}
              placeholder="Message"
              className="contactInput"
            ></textarea>
            <button
              type="submit"
              className="rounded-sm bg-[var(--secondary)] py-5 font-bold text-[var(--primary)]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
