'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AiFillFileText, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import Navbar from '../navbar'

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const ContactForm = () => {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:mander.anshuman@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`
  }
  return (
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
        className="rounded-sm bg-[var(--secondary)] py-2 font-bold text-[var(--primary)] md:py-5"
      >
        Submit
      </button>
    </form>
  )
}

const Contacts = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center">
      <div className="h-0.5 w-32 rounded-sm bg-[var(--secondary)]"></div>
      <div className="flex flex-row items-center gap-x-4 rounded-sm border-2 border-[var(--secondary)] p-3">
        {/* LinkedIn */}
        <Link
          title="Linkedin"
          href="https://www.linkedin.com/in/anshuman-mander-7b3137193/"
          target="_blank"
        >
          <AiFillLinkedin className="h-6 w-6 text-[var(--primary)] hover:text-[var(--secondary)] md:h-7 md:w-7" />
        </Link>

        {/* Github */}
        {/* <Link
          title="Github"
          href="https://github.com/AnshSAMA?tab=repositories"
          target="_blank"
        >
          <AiOutlineGithub className="h-6 w-6 text-[var(--primary)] hover:text-[var(--secondary)] md:h-7 md:w-7" />
        </Link> */}

        <Link
          href="mailto:mander.anshuman@gmail.com"
          className="text-xs font-thin hover:text-[var(--secondary)] md:text-sm"
        >
          mander.anshuman@gmail.com
        </Link>
      </div>
      <div className="h-0.5 w-32 rounded-sm bg-[var(--secondary)]"></div>
    </div>
  )
}

export default function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0, 0, 0, 0, 0.2, 0.4, 1], y: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      <div className="mx-auto mt-4 flex h-full max-w-7xl flex-col items-center justify-center text-center">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="py-1">
            <h4 className="text-center text-base text-[var(--primary)]  md:text-2xl">
              Want to get in touch with me?
            </h4>
            <div className="h-0.5 w-full rounded-sm bg-[var(--secondary)]"></div>
          </div>
          <h6 className="text-center text-sm text-[var(--primary)]  md:text-base">
            Feel free to reach out at
          </h6>
          <Contacts />
          {/* <h4 className="text-center text-sm text-[var(--primary)]  md:text-base">
            Or shoot me a quick message right here!
          </h4>
          <ContactForm /> */}
        </div>
      </div>
    </motion.div>
  )
}
