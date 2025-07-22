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
          `Led strategic development and delivery of ServiceNow ITSM & CSM solutions, aligning platform capabilities with business goals and driving measurable outcomes.`,
          `Acted as a key advisor and escalation point for consulting teams, mentoring junior consultants and uplifting delivery capability.`,
          `Fostered trusted relationships with C-level and senior stakeholders, translating complex business needs into scalable ITIL-aligned ServiceNow solutions.`,
          `Oversaw platform governance, security, and performance, ensuring compliance, operational resilience, and continuous improvement.`,
          `Delivered stakeholder training, drove platform adoption, and maximized ROI through engagement, enablement, and thought leadership.`,
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
          `Cultivated trusted partnerships with diverse clients and managed their ServiceNow instances, including those for VicRoads, the NSW Department of Planning & Environment, TAL Insurance, and others, to deliver tailored ServiceNow solutions.`,
          `Acted as a 'ServiceNow evangelist', collaborating with cross-functional teams to gather requirements, design solutions, and deliver high-quality ServiceNow implementations to streamline business processes.`,
          `Worked on a variety of modules, instance upgrades, provided training and support to end-users and stakeholders, to enhance platform functionality and maximize adoption while achieving high user satisfaction scores.`,
          `Continuously pursued professional development by completing ITIL, CAD, CIS ITSM, CIS Discovery, CIS HRSD & CIS CSM certifications while excelling in my core responsibilities, culminating in receiving the prestigious ACE'd IT award.`,
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
          `Engineered and shipped highly interactive web apps utilizing JavaScript, Angular & ServiceNow as university’s primary platform for enterprise service management. `,
          `Administered and implemented ITSM and CSM applications, proposed and standardized new development processes for improved security, manageability, performance, and service experience.`,
          `Collaborated with business analysts, project teams and key stakeholders to gather requirements and deliver scalable, user-centric solutions on the ServiceNow platform.`,
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
