import React from 'react'
import ExperienceCard from './ExperienceCard'
import ACUImage from './acu.png'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <div
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-evenly
    overflow-hidden px-10 pt-28 text-left md:flex-row"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>
      <div
        className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10
      scrollbar scrollbar-track-[#39297A]/50 scrollbar-thumb-[#0C0818]"
      >
        {/* Experience Card */}
        <ExperienceCard
          image={ACUImage}
          position="Software Engineer"
          companyName="Australian Catholic University"
          startDate="July, 26 2022"
          endDate="Present"
        />
        <ExperienceCard
          image={ACUImage}
          position="Software Engineer"
          companyName="Australian Catholic University"
          startDate="July, 26 2022"
          endDate="Present"
        />
        <ExperienceCard
          image={ACUImage}
          position="Software Engineer"
          companyName="Australian Catholic University"
          startDate="July, 26 2022"
          endDate="Present"
        />
      </div>
    </div>
  )
}
