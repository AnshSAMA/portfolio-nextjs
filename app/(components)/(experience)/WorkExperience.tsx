import React from 'react'
import ExperienceCard from './ExperienceCard'
import ACUImage from './acu.png'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <div
      className="min-h-screen relative text-left max-w-7xl overflow-hidden px-10 pt-28 mx-auto
    flex flex-col items-center md:flex-row justify-evenly"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
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
