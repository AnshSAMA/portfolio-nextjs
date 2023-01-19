import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from './(components)/(hero)/Hero'
import About from './(components)/(about)/About'
import WorkExperience from './(components)/(experience)/WorkExperience'
import Skills from './(components)/(skills)/Skills'
import Projects from './(components)/(projects)/Projects'
import Contact from './(components)/(contact)/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-start">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </main>
  )
}
