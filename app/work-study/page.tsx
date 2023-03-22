import React from 'react'
import ExperienceCard from './ExperienceCard'
import ACUImage from '/public/acu.png'
import LiberoImage from '/public/libero.png'
import UQImage from '/public/uq-logo.jpeg'

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
        position="Software Engineer"
        companyName="Australian Catholic University"
        startDate="July, 26 2022"
        endDate="Current"
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
