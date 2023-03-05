'use client'

import React from 'react'
import { Cursor, useTypewriter, Typewriter } from 'react-simple-typewriter'

type Props = { typewriterWords: string[]; className?: string }

export default function TypeWriterText({ typewriterWords, className }: Props) {
  const [text, count] = useTypewriter({
    words: typewriterWords,
    loop: true,
    delaySpeed: 3000,
  })
  return <Typewriter words={typewriterWords} cursor={true} loop={true} />
}
