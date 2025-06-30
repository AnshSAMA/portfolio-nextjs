import React from 'react'
import ExperienceCard from './ExperienceCard'
import ACUImage from '/public/acu.png'
import LiberoImage from '/public/libero.png'
import UQImage from '/public/uq-logo.jpeg'
import AC3Image from '/public/AC3.png'
import OneStepGroupImage from '/public/OneStepGroup.png'

type Props = {}

type TimelineDotProps = {
  direction: 'left' | 'right'
  content: JSX.Element
}
const TimelineDot = ({ direction, content }: TimelineDotProps) => {
  return (
    <div
      className={`left col-start-2 col-end-3 grid h-4 grid-cols-2 ${
        direction === 'right' ? 'justify-items-start' : 'justify-items-end'
      }`}
    >
      <div
        className={`flex items-center justify-center gap-2 ${
          direction === 'right' ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        <div className="h-2 w-2 rounded-full bg-[var(--primary)]"></div>
        <div className="h-0.5 w-16 bg-[var(--secondary)]"></div>
        <div>{content}</div>
      </div>
      <div className={`${direction === 'right' ? 'row-start-1' : ''}`}></div>
    </div>
  )
}

export default function WorkStudy({}: Props) {
  const current = <div>Present</div>
  const end = <div>End</div>
  const underlineDiv = (text: string) => <div className="underline">{text}</div>

  return (
    <div className="flex flex-col items-center gap-y-2">
      <TimelineDot content={current} direction="right" />
      <div className="h-32 w-0.5 bg-[var(--secondary)]"></div>
      <ExperienceCard
        position="ServiceNow Product Owner"
        companyName="OneStep Group"
        startDate="January 2025"
        endDate="Current"
        image={OneStepGroupImage}
        description={[
          `Acted as a key decision-maker, ensuring that ServiceNow solutions align with business goals and deliver tangible value.`,
          'Work closely with cross-functional teams, including executives, developers, and administrators, to translate business needs into technical solutions.',
          'Oversee ServiceNow module implementations, upgrades, and enhancements across the platform to optimize workflows and automation.',
        ]}
      />
    <div className="flex flex-col items-center gap-y-2">
      <TimelineDot content={current} direction="right" />
      <div className="h-32 w-0.5 bg-[var(--secondary)]"></div>
      <ExperienceCard
        position="ServiceNow Administrator"
        companyName="AC3 Pty Ltd."
        startDate="August 2023"
        endDate="January 2025"
        image={AC3Image}
        description={[
          `Collaborated with diverse clients, including VicRoads, NSW Department of Planning & Environment, and TAL Insurance, to deliver tailored ServiceNow implementations`,
          'Championed ServiceNow across teams, driving requirements, solution design, and high-quality implementations to streamline business processes.',
          'Delivered enhancements across modules, led upgrades, and supported users to boost functionality, drive adoption, and maintain high satisfaction.',
        ]}
      />
    <div className="flex flex-col items-center gap-y-2">
      <TimelineDot content={current} direction="right" />
      <div className="h-32 w-0.5 bg-[var(--secondary)]"></div>
      <ExperienceCard
        position="ServiceNow Developer"
        companyName="Australian Catholic University"
        startDate="July 2022"
        endDate="August 2023"
        image={ACUImage}
        description={[
          `Built highly interactive web apps utilizing JavaScript, Angular & ServiceNow`,
          'Implemented new modules and complex forms in ServiceNow to improve service experience',
          'Worked closely with business analysts, project managers and other relevant stakeholders',
        ]}
      />
      <div className="h-32 w-0.5 bg-[var(--secondary)]"></div>
      <ExperienceCard
        position="Junior Software Developer"
        companyName="Libero Systems Pvt Ltd"
        startDate="May, 2021"
        endDate="July, 2022"
        image={LiberoImage}
        description={[
          'Developed and maintained code using TypeScript/JavaScript, React, Caché & other supporting tools',
          'Worked on a range of projects, using full-stack to resolve user issues & implement feature requests',
          'Readily refactored old code to modern, performant and robust code',
        ]}
      />
      <div className="h-32 w-0.5 bg-[var(--secondary)]"></div>
      <ExperienceCard
        position="University of Queensland"
        companyName="Bachelor of Information Technology"
        startDate="Feb, 2018"
        endDate="Feb, 2021"
        image={UQImage}
        description={[
          'Major: User Experience Design',
          'Gained technical mastery over JavaScript, CSS, HTML, Python, Java, C programming, C# & SQL',
          'Used various design and prototyping tools such as Figma, Adobe Illustrator / XD / InDesign, InVision Studio & Arduino',
        ]}
      />
      <div className="h-32 w-0.5 bg-[var(--secondary)]"></div>
      <TimelineDot content={end} direction="left" />
    </div>
  )
}
