import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  position: string
  companyName: string
  startDate: string
  endDate: string
  image: StaticImageData
  description: string[]
}

export default function ExperienceCard({
  position,
  companyName,
  startDate,
  endDate,
  image,
  description,
}: Props) {
  return (
    <article className="flex w-5/6 cursor-pointer flex-col items-center justify-center space-y-2 overflow-hidden rounded-md bg-[#000] py-6 md:w-1/2">
      <Image
        src={image}
        alt={`${companyName} Logo`}
        className="h-28 w-28 rounded-full object-cover object-center"
      />
      <div className="flex flex-col items-center justify-center space-y-1">
        <h4 className="text-base font-medium md:text-xl">{companyName}</h4>
        <h6 className="text-base font-medium md:text-lg">{position}</h6>
        <p className="text-sm uppercase text-gray-300 md:text-base">
          {startDate} - {endDate}
        </p>
        <div className="w-4/5 space-y-2 text-justify text-xs md:w-96 md:text-left md:text-base">
          {description.map((point) => (
            <div key={point}>• {point}</div>
          ))}
        </div>
      </div>
    </article>
  )
}
