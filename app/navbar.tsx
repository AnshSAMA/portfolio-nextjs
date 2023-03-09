'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

type Props = { homepage?: true }

export default function Navbar({ homepage }: Props) {
  const links = [
    { title: 'home', href: '/' },
    { title: 'about', href: '/about' },
    { title: 'work/study', href: '/work-study' },
    { title: 'contact', href: '/contact' },
  ]

  // Don't show navbar on top for homepage
  const pathname = usePathname()
  if (!homepage && (pathname === '/' || pathname === '/home')) return null

  return (
    <motion.nav
      layoutId="navigation"
      initial={pathname === '/' ? { opacity: 0 } : {}}
      animate={pathname === '/' ? { opacity: [0, 0, 0, 0, 0, 0.2, 1] } : {}}
      transition={{ duration: 0.3 }}
      className={`z-20 flex w-full justify-center gap-x-3 rounded-b-md py-8 ${
        homepage ? '' : 'bg-[var(--background)]'
      }`}
    >
      {links.map((link) => (
        <Link
          key={link.title}
          className={`relative p-1 text-xs uppercase text-[var(--primary)] transition-all hover:text-[var(--secondary)] md:tracking-widest`}
          href={link.href}
        >
          {!homepage && pathname === link.href && (
            <motion.span
              layoutId="navLinks"
              transition={{ duration: 0.3 }}
              className={`'rounded-sm absolute left-0 top-full block h-0.5 w-full bg-[var(--secondary)] hover:text-[var(--primary)]
            `}
            ></motion.span>
          )}
          {link.title}
        </Link>
      ))}
    </motion.nav>
  )
}
