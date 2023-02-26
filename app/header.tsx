'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillMail,
  AiFillFileText,
} from 'react-icons/ai'

type Props = {}
const socialIconsDimension = {
  height: 40,
  width: 40,
}

export default function Header({}: Props) {
  return (
    <header className="flex w-full flex-row items-start justify-between p-7 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
        }}
        className="flex flex-row items-center"
      >
        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/anshuman-mander-7b3137193/">
          <AiFillLinkedin
            className="mr-3 text-[var(--primary)] hover:text-[var(--secondary)]"
            size={25}
          />
        </Link>

        {/* Github */}
        <Link href="https://github.com/AnshSAMA?tab=repositories">
          <AiOutlineGithub
            className="mr-3 text-[var(--primary)] hover:text-[var(--secondary)]"
            size={25}
          />
        </Link>
        {/* Email */}
        <Link href="#contact">
          <AiFillMail
            className="text-[var(--primary)] hover:text-[var(--secondary)]"
            size={25}
          />
        </Link>
      </motion.div>
      {/* resume */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
        }}
        className="group flex cursor-pointer flex-row items-center text-[var(--primary)] hover:text-[#fff]"
      >
        {/* Resume Document */}
        <Link href="#" className="flex flex-row items-center">
          <AiFillFileText
            className="mr-3 text-[var(--primary)] group-hover:text-[var(--secondary)]"
            size={25}
          />
          <p className="hidden text-xs uppercase text-[var(--primary)] group-hover:text-[var(--secondary)] md:inline-flex">
            resume
          </p>
        </Link>
      </motion.div>
    </header>
  )
}
