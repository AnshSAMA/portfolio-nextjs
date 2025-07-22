'use client'

import React from 'react'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 py-4 md:gap-y-12">
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-2xl text-[var(--primary)]">
          What I Know
        </h2>
        <div className="h-0.5 w-full bg-[var(--secondary)]"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-xs md:grid-cols-3 md:flex-row md:gap-12 md:text-sm">
        <div className="flex max-w-xs flex-col gap-y-2 divide-[var(--secondary)] rounded-sm p-3">
          <h4>ServiceNow & Relevant Certs</h4>
          <div className="h-0.5 w-full bg-[var(--secondary)]"></div>
          <ol>
            <li>- CTA (Upcoming, Sep 2025)</li>
            <li>- CSA</li>
            <li>- CAD</li>
            <li>- CIS ITSM</li>
            <li>- CIS CSM</li>
            <li>- CIS HRSD</li>
            <li>- CIS SPM</li>
            <li>- CIS Discovery</li>
            <li>- ITIL v4</li>
          </ol>
        </div>
        <div className="flex max-w-xs flex-col gap-y-2 divide-[var(--secondary)] rounded-sm p-3">
          <h4>Web Development & Backend</h4>
          <div className="h-0.5 w-full bg-[var(--secondary)]"></div>
          <ol>
            <li>- NextJS/ReactJS</li>
            <li>- tailwindcss</li>
            <li>- (S)CSS</li>
            <li>- HTML</li>
            <li>- TypeScript/JavaScript</li>
            <li>- Python</li>
            <li>- C</li>
            <li>- C#</li>
            <li>- SQL</li>
          </ol>
        </div>
        <div className="flex max-w-xs flex-col gap-y-2 divide-[var(--secondary)] rounded-sm p-3">
          <h4>Design & Misc</h4>
          <div className="h-0.5 w-full bg-[var(--secondary)]"></div>
          <ol>
            <li>- Figma</li>
            <li>- Adobe Illustrator</li>
            <li>- Adobe XD</li>
            <li>- Adobe InDesign</li>
            <li>- InVision Studio</li>
            <li>- NodeJS, Git, Unix Shell</li>
            <li>- Unity</li>
            <li>- Arduino</li>
            <li>- MATLAB</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
