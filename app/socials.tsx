'use client'

import React from 'react'
import Link from 'next/link'

import { AiFillLinkedin, AiOutlineGithub, AiFillFileText } from 'react-icons/ai'

type Props = {}

const ContactLinks = () => {
  return (
    <div className="bottom-3 -right-1 z-20 md:fixed">
      <div className="flex flex-row items-center justify-center gap-x-5">
        {/* LinkedIn */}
        <Link
          title="Linkedin"
          href="https://www.linkedin.com/in/anshuman-mander-7b3137193/"
          target="_blank"
        >
          <AiFillLinkedin
            className="text-[var(--primary)] hover:text-[var(--secondary)]"
            size={25}
          />
        </Link>

        {/* Github */}
        <Link
          title="Github"
          href="https://github.com/AnshSAMA?tab=repositories"
          target="_blank"
        >
          <AiOutlineGithub
            className="text-[var(--primary)] hover:text-[var(--secondary)]"
            size={25}
          />
        </Link>

        {/* Resume Document */}
        <Link
          title="Resume"
          href="/Anshy's Resume.pdf"
          target="_blank"
          className="flex flex-row items-center"
        >
          <AiFillFileText
            className="text-[var(--primary)] hover:text-[var(--secondary)]"
            size={25}
          />
        </Link>
        <div className="hidden h-0.5 w-16 rounded-sm bg-[var(--secondary)] md:block"></div>
      </div>
    </div>
  )
}

export default function Contacts({}: Props) {
  return (
    <div className="flex justify-between py-4 px-6 md:p-0">
      <ContactLinks />
      <div className="-bottom-1 right-6 z-20 flex items-center justify-center md:fixed">
        <div className="flex flex-col items-center justify-center gap-y-5">
          <Link
            href="mailto:mander.anshuman@gmail.com"
            className="text-xs font-thin hover:text-[var(--secondary)] md:text-sm md:[writing-mode:vertical-rl]"
          >
            mander.anshuman@gmail.com
          </Link>
          <div className="hidden h-16 w-0.5 rounded-sm bg-[var(--secondary)] md:block"></div>
        </div>
      </div>
    </div>
  )
}
