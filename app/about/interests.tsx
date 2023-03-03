import React from 'react'

type Props = {}
const myInterests = [
  {
    interestName: 'programming',
    positionX: 'top-[5px]',
    positionY: 'right-[5px]',
    rotation: 'rotate-[0deg]',
  },
  {
    interestName: 'nandos',
    positionX: 'top-[50px]',
    positionY: 'right-[-20px]',
    rotation: 'rotate-[90deg]',
  },
  {
    interestName: 'gym',
    positionX: 'top-[5px]',
    positionY: 'left-[5px]',
    rotation: 'rotate-[0deg]',
  },
  {
    interestName: 'beaches',
    positionX: 'top-[50px]',
    positionY: 'left-[-20px]',
    rotation: 'rotate-[-90deg]',
  },

  {
    interestName: 'basketball',
    positionX: 'bottom-[5px]',
    positionY: 'left-[5px]',
    rotation: 'rotate-[0deg]',
  },

  {
    interestName: 'fashion',
    positionX: 'bottom-[45px]',
    positionY: 'left-[-15px]',
    rotation: 'rotate-[-90deg]',
  },
  {
    interestName: 'beers',
    positionX: 'top-[30%]',
    positionY: 'left-[-12px]',
    rotation: 'rotate-[-90deg]',
  },
  {
    interestName: 'design',
    positionX: 'bottom-[30%]',
    positionY: 'left-[-12px]',
    rotation: 'rotate-[-90deg]',
  },
]

export default function Interests({}: Props) {
  return (
    <div>
      {myInterests.map((interest) => {
        return (
          <div
            key={interest.interestName}
            className={`fixed z-20 text-sm text-gray-700 ${interest.rotation} ${interest.positionY} ${interest.positionX}`}
          >
            {interest.interestName}
          </div>
        )
      })}
    </div>
  )
}
