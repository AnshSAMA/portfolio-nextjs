import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import skillImage from './acu.png'

type Props = {
  directionLeft?: boolean
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={skillImage}
          alt="skill"
          className="h-16 w-16 xl:h-24 xl:w-24 
          rounded-full border border-gray-700 object-cover
          filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      <div
        className="absolute opacity-0 group-hover:opacity-80
      transition duration-300 ease-in-out group-hover:bg-black 
      h-16 w-16 xl:h-24 xl:w-24 rounded-full"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-gray-300 opacity-100">100%</p>
        </div>
      </div>
    </div>
  )
}
