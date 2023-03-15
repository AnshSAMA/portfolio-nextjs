'use client'

import React from 'react'
import Link from 'next/link'
import { AiFillLinkedin, AiOutlineGithub, AiFillFileText } from 'react-icons/ai'
import { usePathname } from 'next/navigation'

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
          <AiFillLinkedin className="h-6 w-6 text-[var(--primary)] hover:text-[var(--secondary)] md:h-7 md:w-7" />
        </Link>

        {/* Github */}
        <Link
          title="Github"
          href="https://github.com/AnshSAMA?tab=repositories"
          target="_blank"
        >
          <AiOutlineGithub className="h-6 w-6 text-[var(--primary)] hover:text-[var(--secondary)] md:h-7 md:w-7" />
        </Link>

        {/* Resume Document */}
        <Link
          title="Resume"
          href="https://docs.google.com/document/d/1--oidksjYFGjatbGSes6bbFAHZOENlQh/edit?usp=sharing&ouid=104729262307302321972&rtpof=true&sd=true"
          target="_blank"
          className="flex flex-row items-center"
        >
          <AiFillFileText className="h-6 w-6 text-[var(--primary)] hover:text-[var(--secondary)] md:h-7 md:w-7" />
        </Link>
        <div className="hidden h-0.5 w-16 rounded-sm bg-[var(--secondary)] md:block"></div>
      </div>
    </div>
  )
}

export default function Contacts({}: Props) {
  const pathname = usePathname()
  // Don't show these Contacts for "Contacts" page
  // Different styling is used for contacts shown there
  if (pathname === '/contact') return null
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
