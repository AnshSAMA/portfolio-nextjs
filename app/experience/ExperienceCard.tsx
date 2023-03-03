import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  position: string
  companyName: string
  startDate: string
  endDate: string
  image: StaticImageData
}

export default function ExperienceCard({
  position,
  companyName,
  startDate,
  endDate,
  image,
}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#160F2E] p-10 opacity-40 hover:opacity-100
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <Image
        src={image}
        alt={`${companyName} Logo`}
        className="h-28 w-28 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px]"
      />
      <div className="space-y-1">
        <h4 className="text-2xl font-light">{position}</h4>
        <h6 className="text-base font-bold">{companyName}</h6>
        <div className="flex space-x-2 py-2">
          <Image
            src={image}
            alt="skills logo"
            className="h-10 w-10 rounded-full"
          />
          <Image
            src={image}
            alt="skills logo"
            className="h-10 w-10 rounded-full"
          />
          <Image
            src={image}
            alt="skills logo"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase text-gray-300">
          {startDate} - {endDate}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>lalala</li>
          <li>lalala</li>
          <li>lalala</li>
          <li>lalala</li>
        </ul>
      </div>
    </article>
  )
}
