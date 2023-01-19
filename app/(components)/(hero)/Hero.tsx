'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import HeroImg from './hero-img.jpg'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, call me Anshy`,
      'Or-guy-who-loves-to-code.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* <img src="" /> */}
      <div className="relative">
        <Image
          className="h-28 w-28 rounded-full mx-auto object-cover"
          src={HeroImg}
          alt="Hero Image"
          // fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Engineer
        </h2>
        <h1 className="text-3xl md:text-4xl font-semibold px-10 ">
          <span>{text}</span>
          <Cursor cursorColor="#39297A"></Cursor>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
