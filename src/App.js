import { useEffect } from 'react'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import ContactMe from './components/ContactMe/ContactMe'

import './App.css'


function App() {

  useEffect(() => {
    document.title = "This is a title"
  }, [])

  return (
    <div className="app">
      <Nav/>
      <a href='#' id='about-me' name="about-me"></a>
      <AboutMe/>
      <a href='#' name="projects"></a>
      <Projects/>
      <a href='#' name="contact-me"></a>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
