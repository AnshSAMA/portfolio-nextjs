'use client'

import React from 'react'
import MagicalText from '../(magicalText)/magicalText'
import Image from 'next/image'

import AboutImgOne from './about-1.jpg'
import AboutImgTwo from './about-2.jpg'
import AboutImgThree from './about-3.jpg'

type Props = {}

export default function About({}: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly text-center ">
      <h3 className="text-2xl uppercase text-[var(--secondary)]">About</h3>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="group relative h-32 w-32 md:h-64 md:w-64">
          <Image
            src={AboutImgOne}
            alt="Some cool pics of me!!"
            className="absolute aspect-[5/7] translate-x-[10%] rotate-6 rounded-lg object-cover transition-transform duration-700 group-hover:translate-y-[5%] group-hover:translate-x-[40%] group-hover:rotate-12"
          />
          <Image
            src={AboutImgThree}
            alt="Some cool pics of me!!"
            className="absolute aspect-[5/7] translate-x-[-10%] -rotate-3 rounded-lg object-cover transition-transform duration-700 group-hover:translate-y-[5%] group-hover:translate-x-[-40%] group-hover:-rotate-12"
          />

          <Image
            src={AboutImgTwo}
            alt="Some cool pics of me!!"
            className="absolute aspect-[5/7] rounded-lg object-cover"
          />
        </div>
        <div className="space-y-4 px-0 md:max-w-md md:px-10">
          <h4 className="text-2xl font-semibold uppercase">
            a little about me !!
          </h4>
          <p>Software engineer by profession, </p>
        </div>
      </div>
    </div>
  )
}
