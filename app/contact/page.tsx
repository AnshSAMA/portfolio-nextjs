'use client'

import { motion } from 'framer-motion'
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 0, 0, 0.2, 0.4, 1] }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar active="contact" />
      <div className="mx-auto mt-16 flex h-full max-w-7xl flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-12">
          <div>
            <h4 className="text-center text-base text-[var(--primary)]  md:text-xl">
              Wanna get in contact with me?
            </h4>
            <h4 className="text-center text-base text-[var(--primary)]  md:text-xl">
              Shoot me a quick message right here!
            </h4>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex w-fit flex-col space-y-2"
          >
            <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <input
                {...register('name')}
                placeholder="Name"
                className="rounded-sm border-b border-[#242424] bg-slate-100/10 px-2 py-2 text-gray-500 placeholder-gray-500 outline-none transition-all focus:border-[var(--secondary)] focus:text-gray-300 hover:border-[var(--secondary)]"
                type="text"
              />
              <input
                {...register('email')}
                placeholder="Email"
                className="rounded-sm border-b border-[#242424] bg-slate-100/10 px-2 py-2 text-gray-500 placeholder-gray-500 outline-none transition-all focus:border-[var(--secondary)] focus:text-gray-300 hover:border-[var(--secondary)]"
                type="email"
              />
            </div>
            <input
              {...register('subject')}
              placeholder="Subject"
              className="rounded-sm border-b border-[#242424] bg-slate-100/10 px-2 py-2 text-gray-500 placeholder-gray-500 outline-none transition-all focus:border-[var(--secondary)] focus:text-gray-300 hover:border-[var(--secondary)]"
              type="text"
            />
            <textarea
              {...register('message')}
              placeholder="Message"
              className="rounded-sm border-b border-[#242424] bg-slate-100/10 px-2 py-2 text-gray-500 placeholder-gray-500 outline-none transition-all focus:border-[var(--secondary)] focus:text-gray-300 hover:border-[var(--secondary)]"
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
    </motion.div>
  )
}
