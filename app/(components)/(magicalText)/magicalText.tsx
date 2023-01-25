import React from 'react'
import './magicalText.css'
import MagicStar from './magicStar'

type Props = { text: string }

export default function MagicalText({ text }: Props) {
  return (
    <span className="magic">
      <MagicStar interval={1100} />
      <MagicStar interval={1200} />
      <MagicStar interval={1300} />
      <span className="magic-text">{text}</span>
    </span>
  )
}
