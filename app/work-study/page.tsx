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
          `Led strategic development and delivery of ITSM & CSM solutions`,
          `Implemented TPSM solution, boosting customer satisfaction by 35%`,
          `Acted as a key advisor and escalation point for consulting teams`,
          `Mentored junior consultants to strengthen delivery capability`,
          `Fostered trusted relationships with C-level executives`,
          `Translated complex business needs into scalable ITIL-aligned ServiceNow solutions.`,
          `Oversaw platform upgrades, governance, security, and performance`,
          `Delivered stakeholder training & drove platform adoption strategies`,
          `Maximized ROI through engagement, enablement, and thought leadership`,
        ]}
      />
      <div className="h-32 w-0.5 bg-[var(--secondary)]"></div>
      <ExperienceCard
        position="ServiceNow Administrator"
        companyName="AC3 Pty Ltd."
        startDate="August 2023"
        endDate="January 2025"
        image={AC3Image}
        description={[
          `Managed 5+ ServiceNow instances for clients (including for VicRoads, NSW Dept. of Planning & Environment, TAL Insurance, etc.)`,
          `Maintained client satisfaction score above 95%`,
          `Collaborated with cross-functional teams to gather requirements and design scalable solutions`,
          `Delivered end-to-end ServiceNow implementations that streamlined business processes`,
          `Led instance upgrades, platform enhancements, and facilitated stakeholder workshops`,
          `Recognized for excellence with the ACE’d IT Award for outstanding performance`,
        ]}
      />
      <div className="h-32 w-0.5 bg-[var(--secondary)]"></div>
      <ExperienceCard
        position="ServiceNow Developer"
        companyName="Australian Catholic University"
        startDate="July 2022"
        endDate="August 2023"
        image={ACUImage}
        description={[
          `Built and deployed interactive applications on ServiceNow as University's enterprise platform`,
          `Administered and implemented ITSM, CSM & ITOM modules`,
          `Proposed and standardized development processes to improve security, performance, and maintainability`,
          `Partnered with business analysts, project teams, and stakeholders to gather requirements and deliver scalable, user-focused solutions on ServiceNow`,
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
