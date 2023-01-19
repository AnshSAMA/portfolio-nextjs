'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import acuImage from './acu.png'
import { motion } from 'framer-motion'

type Props = {}

type project = {
  number: number
  title: string
  img: StaticImageData
  description: string
}

export default function Projects({}: Props) {
  const projects: project[] = [
    {
      number: 1,
      title: 'ABC',
      img: acuImage,
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolor cupiditate earum, alias consequuntur doloribus, distinctio reiciendis quisquam non quia temporibus sit eaque obcaecati, autem eligendi! Blanditiis harum earum impedit.',
    },
    {
      number: 2,
      title: 'ABC',
      img: acuImage,
      description: 'abc 123',
    },
    {
      number: 3,
      title: 'ABC',
      img: acuImage,
      description: 'abc 123',
    },
  ]
  return (
    <div
      className="h-screen relative flex flex-col justify-center items-center
      text-center md:text-left xl:flex-row max-w-7xl xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="absolute w-full h-[350px] top-[30%] bg-[#160F2E] skew-y-12">
        {/* The background shape */}
      </div>
      <div
        className="w-full h-[100%] relative flex justify-start items-center
        overflow-x-scroll overflow-y-hidden 
        snap-x snap-mandatory z-20
        scrollbar-thin scrollbar-track-[#39297A]/50 scrollbar-thumb-[#0C0818]"
      >
        {projects.map((project) => (
          <div
            key={project.number}
            className="w-screen flex flex-col items-center 
            flex-shrink-0 snap-center space-y-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image src={project.img} alt="test" className="w-32 h-32" />
            </motion.div>
            <div className="max-w-[60%] space-y-4">
              <h4 className="text-center">{project.title}</h4>
              <p className="text-justify">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
