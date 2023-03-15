import React from 'react'
import ExperienceCard from './ExperienceCard'
import ACUImage from '/public/acu.png'
import LiberoImage from '/public/libero.png'

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

  return (
    <div className="flex flex-col items-center gap-y-2">
      <TimelineDot content={current} direction="right" />
      <div className="h-32 w-0.5 bg-[var(--secondary)]"></div>
      <ExperienceCard
        position="Software Engineer"
        companyName="Australian Catholic University"
        startDate="July, 26 2022"
        endDate="Current"
        image={ACUImage}
        description={[
          'Engineered and shipped highly interactive web apps utilizing JavaScript, Angular & ServiceNow as university’s primary platform for enterprise service management.',
          'Administered and implemented new applications to ServiceNow, proposed and standardized new development processes for improved security, manageability, performance, and service experience.',
          'Worked closely with business analysts, project managers and relevant stakeholders to devise and document new feature changes.',
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
          'Developed and maintained code for in-house and client websites using TypeScript/JavaScript, React, Caché & other supporting tools. ',
          'Worked on a range of projects across different technologies, collaborating with supporting teams, programmers and clients to identify and resolve issues, implement feature requests, utilize APIs, and provide support for a variety of tech issues.',
          'Readily learned new programming languages, refactored old code to modern, performant and robust code, designed & developed new functionalities.',
        ]}
      />
      <div className="h-32 w-0.5 bg-[var(--secondary)]"></div>
      <TimelineDot content={end} direction="left" />
    </div>
  )
}
