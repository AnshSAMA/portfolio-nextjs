'use client'

import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 py-4 md:gap-y-12">
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-2xl text-[var(--primary)]">
          What I Know
        </h2>
        <div className="h-0.5 w-full bg-[var(--primary)]"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4 md:flex-row md:gap-12">
        <div className="flex max-w-xs flex-col gap-y-2 divide-[var(--secondary)] rounded-sm p-3">
          <h4>Front-End</h4>
          <div className="h-0.5 w-full bg-[var(--secondary)]"></div>
          <ol>
            <li>- NextJS</li>
            <li>- ReactJS</li>
            <li>- tailwindcss</li>
            <li>- (S)CSS</li>
            <li>- HTML</li>
          </ol>
        </div>
        <div className="flex max-w-xs flex-col  gap-y-2 divide-[var(--secondary)] rounded-sm p-3">
          <h4>Back-End</h4>
          <div className="h-0.5 w-full bg-[var(--secondary)]"></div>
          <ol>
            <li>- JavaScript</li>
            <li>- Python</li>
            <li>- C#</li>
            <li>- SQL</li>
          </ol>
        </div>
        <div className="flex max-w-xs flex-col gap-y-2 divide-[var(--secondary)] rounded-sm p-3">
          <h4>Design</h4>
          <div className="h-0.5 w-full bg-[var(--secondary)]"></div>
          <ol>
            <li>- Figma</li>
            <li>- Adobe Illustrator</li>
            <li>- InVision Studio</li>
            <li>- Adobe XD</li>
          </ol>
        </div>
        <div className="flex max-w-xs flex-col gap-y-2 divide-[var(--secondary)] rounded-sm p-3">
          <h4>Misc</h4>
          <div className="h-0.5 w-full bg-[var(--secondary)]"></div>
          <ol>
            <li>- NodeJS</li>
            <li>- Git</li>
            <li>- Unix Shell</li>
            <li>- Unity</li>
            <li>- Arduino</li>
            <li>- MATLAB</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
