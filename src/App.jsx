import { useState } from 'react'
import './index.css'
import NavBar from './components/navbar/NavBar'
import HomeSection from './components/home/HomeSection'
import AboutSection from './components/about/AboutSection'
import EducationSection from './components/education/EducationSection'
import SkillsSection from './components/skills/SkillsSection'
import ContactSection from './components/contact/ContactSection'
import Footer from './components/footer/Footer'
import useScrollAnimations from './components/hooks/useScrollAnimations'

function App() {

  useScrollAnimations();
  

  return (
    <>
      <NavBar/>
      <HomeSection/>
      <AboutSection/>
      <EducationSection/>
      <SkillsSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
