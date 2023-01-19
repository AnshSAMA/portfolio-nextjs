'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import AboutImage from '/hero-img.jpg'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0.1, 0.2, 0.4, 0.8, 0.4, 1.0] }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen max-w-7xl flex flex-col justify-evenly items-center relative
    text-center md:text-left md:flex-row mx-auto"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 w- h-40 rounded-full object-cover
        md:rounded-lg md:w-72 md:h-72 xl:w-[500px] xl:h-[600px]"
        src="/hero-img.jpg"
        alt="Some cool pics of me!!"
      />
      <div className="space-y-4 px-0 md:px-10 md:max-w-md">
        <h4 className="text-3xl font-semibold uppercase">
          a little about{' '}
          <span className="underline decoration-red-300">me</span> !!
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at
          quisquam necessitatibus reiciendis ipsa laudantium error, ipsam
        </p>
      </div>
    </motion.div>
  )
}
