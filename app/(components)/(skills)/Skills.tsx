'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0.1, 0.2, 0.4, 0.8, 0.6, 1.0] }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col justify-center items-center
      text-center md:text-left xl:flex-row max-w-7xl xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}
