import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import HeroImg from './hero-img.jpg'
import Link from 'next/link'
import MagicalText from '../(magicalText)/magicalText'
import TypeWriterText from './TypeWriterText'

type Props = {}
const typewriterWords = [
  `Hi, call me Anshy`,
  'Or-the-programming-jedi.tsx',
  '<ImJustAProblemSolvingHero 🦸‍♂️ />',
]

export default function Hero({}: Props) {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <div className="relative">
        <Image
          className="mx-auto h-28 w-28 rounded-full object-cover"
          src={HeroImg}
          alt="Hero Image"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="z-20">
        <MagicalText
          text="Software Engineer"
          className="text-md font-semibold uppercase tracking-[4px] text-[var(--primary)] md:tracking-[8px]"
        />

        <h1 className="my-2 px-10 text-xl font-medium text-[var(--primary)] md:text-4xl">
          <TypeWriterText typewriterWords={typewriterWords} />
        </h1>
        <div className="">
          <Link href="#about">
            <button
              className="p-2 text-xs uppercase tracking-widest text-[var(--primary)] transition-all hover:text-[var(--secondary)] 
    md:px-4 md:py-2"
            >
              About
            </button>
          </Link>
          <Link href="#experience">
            <button
              className="p-2 text-xs uppercase tracking-widest text-[var(--primary)] transition-all hover:text-[var(--secondary)] 
    md:px-4 md:py-2"
            >
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button
              className="p-2 text-xs uppercase tracking-widest text-[var(--primary)] transition-all hover:text-[var(--secondary)] 
    md:px-4 md:py-2"
            >
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button
              className="p-2 text-xs uppercase tracking-widest text-[var(--primary)] transition-all hover:text-[var(--secondary)] 
    md:px-4 md:py-2"
            >
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
