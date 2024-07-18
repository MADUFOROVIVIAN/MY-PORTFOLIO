import React from 'react'
import Hero from "../../Component/Hero/Hero"
import Projects from '../../Component/Project/Projects'
import ContactHero from '../../Component/ContactHero/ContactHero'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Projects />
      <ContactHero/>
    </div>
  )
}

export default Home