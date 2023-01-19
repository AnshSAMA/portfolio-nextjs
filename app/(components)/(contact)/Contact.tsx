'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

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
    <div
      className="h-screen relative flex flex-col justify-center items-center
      text-center md:text-left xl:flex-row max-w-7xl xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold text-center">
          I have got just what you need, let&apos;s talk!!
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-fit mx-auto space-y-2"
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
            className="bg-[#08605F] py-5 rounded-sm text-gray-300 font-bold"
          >
            {' '}
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
