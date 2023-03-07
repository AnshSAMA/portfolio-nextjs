'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = { active: 'home' | 'about' | 'experience' | 'contact' | '' }

export default function Navbar({ active }: Props) {
  const links = ['home', 'about', 'experience', 'contact']
  return (
    <motion.nav
      layoutId="nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0, 0, 0, 0.2, 0.4, 1] }}
      transition={{ duration: 0.5 }}
      className={`z-20 flex w-full justify-center gap-x-3 rounded-b-md py-8 ${
        active === '' ? '' : 'bg-[var(--background)]'
      }`}
    >
      {links.map((link) => (
        <Link
          key={link}
          className={`p-1 text-xs uppercase text-[var(--primary)] transition-all hover:text-[var(--secondary)] md:tracking-widest 
          ${
            link === active
              ? 'rounded-sm bg-[var(--secondary)] hover:text-[var(--primary)]'
              : ''
          }`}
          href={`/${link === 'home' ? '' : link}`}
        >
          {link}
        </Link>
      ))}
    </motion.nav>
  )
}
