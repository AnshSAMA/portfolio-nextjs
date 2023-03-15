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
    // box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    <article className="flex w-5/6 cursor-pointer flex-col items-center justify-center space-y-2 overflow-hidden rounded-md bg-[#000] py-6 shadow-sm shadow-[var(--secondary)] md:w-2/3 md:flex-row md:justify-evenly">
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <Image
          src={image}
          alt={`${companyName} Logo`}
          className="h-28 w-28 rounded-full object-cover object-center"
        />
        <h4 className="text-base md:text-lg">{companyName}</h4>
        <h6 className="text-base md:text-base">{position}</h6>
        <p className="text-sm uppercase text-gray-300 md:text-sm">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="w-4/5 space-y-2 text-justify text-xs md:w-96 md:text-left md:text-sm">
        {description.map((point) => (
          <div key={point}>• {point}</div>
        ))}
      </div>
    </article>
  )
}
