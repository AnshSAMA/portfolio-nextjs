'use client'

import React from 'react'
import Image from 'next/image'

import AboutImgOne from './about-1.jpg'
import AboutImgTwo from './about-2.jpg'
import AboutImgThree from './about-3.jpg'
import Skills from './(skills)/Skills'
import { motion } from 'framer-motion'
import Interests from './interests'
import Navbar from '../navbar'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 0, 0, 0.2, 0.4, 1] }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-12"
    >
      <Navbar active="about" />
      <div className="relative flex flex-col-reverse items-center justify-evenly gap-y-12 md:flex-row">
        <div className="flex max-w-md flex-col items-center gap-y-3 px-10 md:max-w-sm md:items-start md:px-0 2xl:max-w-4xl 2xl:items-center">
          <div className="w-fit text-lg font-light text-[var(--secondary)]">
            <h2>
              a <span className="text-3xl font-bold">&quot;LITTLE&quot;</span>{' '}
              about me !!
            </h2>
            <div className="h-0.5 bg-[var(--secondary)]"></div>
          </div>
          <p className="text-justify text-sm md:text-left">
            Hi I&apos;m Anshuman, software engineer by profession and technology
            enthusiast by passion. I&apos;m usually engaged in web development
            trying new tech out.
          </p>
          <p className="text-justify text-sm md:text-left">
            When I&apos;m not coding, you can find me trying new cafe&apos;s,
            getting a workout in or visiting Melbourne&apos;s finest beaches.
            Overall, I believe in working hard and also in Columbus&apos;s rule
            from Zombieland:
          </p>
          <p className="text-base font-semibold text-[var(--secondary)] md:text-lg">
            &quot;Rule #32: Enjoy the little things&quot;
          </p>
        </div>
        <div className="group relative row-start-1 w-32 md:row-auto md:w-64">
          <Image
            src={AboutImgOne}
            alt="Some cool pics of me!!"
            className="absolute aspect-[5/7] translate-y-[5%] translate-x-[40%] rotate-12 rounded-lg object-cover transition-transform duration-700 group-hover:translate-y-[5%] group-hover:translate-x-[40%] group-hover:rotate-12 md:translate-y-0 md:translate-x-[7%] md:rotate-6"
          />
          <Image
            src={AboutImgThree}
            alt="Some cool pics of me!!"
            className="absolute aspect-[5/7] translate-y-[5%] translate-x-[-40%] -rotate-12 rounded-lg object-cover transition-transform duration-700 group-hover:translate-y-[5%] group-hover:translate-x-[-40%] group-hover:-rotate-12 md:translate-y-0 md:translate-x-[-7%] md:-rotate-3"
          />
          <Image
            src={AboutImgTwo}
            alt="Some cool pics of me!!"
            className="relative top-0 z-10 aspect-[5/7] rounded-lg object-cover"
          />
        </div>
      </div>
      <Skills />
    </motion.div>
  )
}
