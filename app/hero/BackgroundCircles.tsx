'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: [1, 2, 3, 1],
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[var(--secondary)]" />
      <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-[var(--secondary)]" />
      <div className="absolute mt-52 h-[500px]  w-[500px] animate-pulse rounded-full border-2 border-[var(--primary)]  opacity-20" />
      <div className="absolute mt-52 h-[700px] w-[700px] rounded-full border border-[var(--secondary)]" />
    </motion.div>
  )
}
