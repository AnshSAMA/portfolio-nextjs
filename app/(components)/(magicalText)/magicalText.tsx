import React from 'react'
import './magicalText.css'
import MagicStar from './magicStar'

type Props = {
  text: string
  className?: string
  stars?: boolean
}

export default function MagicalText({ text, className, stars }: Props) {
  return (
    <span className="magic">
      {stars ? (
        <>
          <MagicStar interval={1100} />
          <MagicStar interval={1200} />
          <MagicStar interval={1300} />{' '}
        </>
      ) : null}
      <p className={`magic-text ${className}`}>{text}</p>
    </span>
  )
}
