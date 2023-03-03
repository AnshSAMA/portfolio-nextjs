import Hero from './(components)/(hero)/Hero'
// import About from './about/page'
// import WorkExperience from './experience/page'
// import WorkExperience from './(components)/experience/page'
// import Skills from './(components)/(skills)/Skills'
// import Projects from './(components)/(projects)/Projects'
// import Contact from './(components)/(contact)/Contact'

export default function Home() {
  return (
    <main>
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-start">
        <WorkExperience />
      </section> */}

      {/* <section id="skills" className="snap-start">
        <Skills />
      </section> */}

      {/* <section id="projects" className="snap-center">
        <Projects />
      </section> */}

      {/* <section id="contact" className="snap-center">
        <Contact />
      </section> */}
    </main>
  )
}
