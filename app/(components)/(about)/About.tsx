'use client'

import { motion } from 'framer-motion'
import React from 'react'
import MagicalText from '../(magicalText)/magicalText'

import TabsUnstyled from '@mui/base/TabsUnstyled'
import TabsListUnstyled from '@mui/base/TabsListUnstyled'
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled'
import TabUnstyled from '@mui/base/TabUnstyled'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0.1, 0.2, 0.4, 0.8, 1.0] }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen max-w-7xl flex flex-col justify-evenly items-center relative
    text-center md:text-left md:flex-row mx-auto"
    >
      <h3 className="absolute top-[50%] left-0 rotate-[270deg] uppercase tracking-[20px] text-[var(--text-secondary)] text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 w- h-40 rounded-full object-cover
        md:rounded-lg md:w-72 xl:h-72"
        src="/hero-img.jpg"
        alt="Some cool pics of me!!"
      />
      <div className="space-y-4 px-0 md:px-10 md:max-w-md">
        <h4 className="text-2xl font-semibold uppercase">
          <MagicalText text="a little about me !!" />
        </h4>
        <TabsUnstyled defaultValue={0} className="">
          <TabsListUnstyled className="rounded-sm border-b-2 border-[var(--secondary)]">
            <TabUnstyled className="mt-1 py-1 px-3 rounded-t-sm focus:bg-[var(--secondary)] focus:text-[var(--text-primary)] text-[var(--text-secondary)]">
              Personal
            </TabUnstyled>
            <TabUnstyled className="mt-1 py-1 px-3 rounded-t-sm focus:bg-[var(--secondary)] focus:text-[var(--text-primary)] text-[var(--text-secondary)]">
              Professional
            </TabUnstyled>
          </TabsListUnstyled>
          <TabPanelUnstyled
            value={0}
            className="my-1 py-1 px-3 text-[var(--text-secondary)]"
          >
            Something about my personal life lalalalala...........
          </TabPanelUnstyled>
          <TabPanelUnstyled
            value={1}
            className="my-1 py-1 px-3 text-[var(--text-secondary)]"
          >
            Something about my professional life lalalalala...........
          </TabPanelUnstyled>
        </TabsUnstyled>
      </div>
    </motion.div>
  )
}
