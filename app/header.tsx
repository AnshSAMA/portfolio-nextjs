'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import ArticleIcon from '@mui/icons-material/Article'
import Link from 'next/link'

type Props = {}
const socialIconsDimension = { height: 40, width: 40 }

const gray300TailwindColor = '#F2F4F3'

export default function Header({}: Props) {
  return (
    <header className="sticky p-5 top-0 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
          damping: 15,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons - from react social icons*/}
        {/* LinkedIn */}
        <SocialIcon
          className="mr-2"
          style={socialIconsDimension}
          url="https://www.linkedin.com/in/anshuman-mander-7b3137193/"
          target="_blank"
          fgColor={gray300TailwindColor}
          bgColor="transparent"
        />
        {/* Github */}
        <SocialIcon
          className="mr-2"
          style={socialIconsDimension}
          url="https://github.com/AnshSAMA?tab=repositories"
          target="_blank"
          fgColor={gray300TailwindColor}
          bgColor="transparent"
        />
        {/* Email */}

        <SocialIcon
          className="cursor-pointer"
          style={socialIconsDimension}
          network="email"
          url="#contact"
          fgColor={gray300TailwindColor}
          bgColor="transparent"
        />
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
          damping: 15,
        }}
        className="flex flex-row items-center text-[#F2F4F3] cursor-pointer"
      >
        <ArticleIcon className="cursor-pointer mr-2" />
        <p className="uppercase hidden md:inline-flex text-xs">resume</p>
      </motion.div>
    </header>
  )
}
