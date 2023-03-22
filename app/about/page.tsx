'use client'

import React from 'react'
import Image from 'next/image'

import AboutImgOne from '/public/about-1.jpg'
import AboutImgTwo from '/public/about-2.jpg'
import AboutImgThree from '/public/about-3.jpg'
import Skills from './(skills)/Skills'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0, 0, 0, 0, 0.2, 0.4, 1], y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-12"
    >
      <div className="relative flex flex-col-reverse items-center justify-evenly gap-y-12 md:flex-row">
        <div className="flex max-w-md flex-col items-center gap-y-3 px-10 md:max-w-sm md:items-start md:px-0">
          <div className="w-fit text-2xl font-light text-[var(--primary)]">
            <h2>
              a{' '}
              <span className="text-3xl font-bold text-[var(--secondary)]">
                &quot;LITTLE&quot;
              </span>{' '}
              about me !!
            </h2>
            <div className="h-0.5 bg-[var(--secondary)]"></div>
          </div>
          <p className="text-justify text-sm md:text-left">
            Hi I&apos;m Anshuman, software engineer by profession and technology
            enthusiast by passion. I&apos;m usually engaged in web development
            trying new dev tools
          </p>
          <p className="text-justify text-sm md:text-left">
            When I&apos;m not coding, you can find me trying new cafe&apos;s,
            getting a workout in or visiting Melbourne&apos;s finest beaches.
            While I believe in working hard, I am also an advocate of
            Columbus&apos;s rule from Zombieland:
          </p>
          <p className="text-base font-semibold text-[var(--secondary)] md:text-lg">
            &quot;Rule #32: Enjoy the little things&quot;
          </p>
        </div>
        <div className="group relative row-start-1 w-32 md:row-auto md:w-64">
          <Image
            src={AboutImgOne}
            alt="Some cool pics of me!!"
            priority
            placeholder="blur"
            className="absolute aspect-[5/7] translate-y-[5%] translate-x-[40%] rotate-12 rounded-lg object-cover transition-transform duration-700 group-hover:translate-y-[5%] group-hover:translate-x-[40%] group-hover:rotate-12 md:translate-y-0 md:translate-x-[7%] md:rotate-6"
          />
          <Image
            src={AboutImgThree}
            alt="Some cool pics of me!!"
            priority
            placeholder="blur"
            className="absolute aspect-[5/7] translate-y-[5%] translate-x-[-40%] -rotate-12 rounded-lg object-cover transition-transform duration-700 group-hover:translate-y-[5%] group-hover:translate-x-[-40%] group-hover:-rotate-12 md:translate-y-0 md:translate-x-[-7%] md:-rotate-3"
          />
          <Image
            src={AboutImgTwo}
            alt="Some cool pics of me!!"
            priority
            placeholder="blur"
            className="relative top-0 z-10 aspect-[5/7] rounded-lg object-cover"
          />
        </div>
      </div>
      <Skills />
    </motion.div>
  )
}
