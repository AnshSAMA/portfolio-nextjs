'use client'

import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import HeroImg from '/public/hero-img.jpg'

import TypeWriterText from './TypeWriterText'
import Navbar from '../navbar'
import MagicalText from '../(components)/(magicalText)/magicalText'
import { motion } from 'framer-motion'

type Props = {}
const typewriterWords = [
  `Hi, call me Anshy!`,
  'Or-the-programming-jedi.tsx ⚔️',
  '<ImJustAProblemSolvingHero 🦸‍♂️ />',
]

export default function Hero({}: Props) {
  return (
    <motion.div className="flex min-h-screen flex-col items-center justify-center space-y-4 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        className="mx-auto h-28 w-28 rounded-full object-cover"
        src={HeroImg}
        alt="Hero Image"
        style={{ objectFit: 'contain' }}
      />
      <MagicalText
        text="Software Engineer"
        stars={true}
        className="text-md z-10 font-semibold uppercase tracking-[4px] text-[var(--primary)] md:tracking-[8px]"
      />
      <h1 className="z-10 text-xl font-medium text-[var(--primary)] md:text-4xl">
        <TypeWriterText typewriterWords={typewriterWords} />
      </h1>
      <Navbar homepage />
    </motion.div>
  )
}
