import { useEffect, useState } from 'react'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import ContactMe from './components/ContactMe/ContactMe'
import Spinner from './components/Spinner/Spinner'

import './App.css'


function App() {

  const [classSpinner, setClassSpinner] = useState(true)

  const handleSpinner = () => {
    setTimeout(() => {
    setClassSpinner(!classSpinner)
  }, 2000);}

  useEffect(() => {
    handleSpinner()
    document.title = "Baccon Sebastian"
  }, [])

  return (
    <div className="app">
      <Spinner class={classSpinner && 'active'}/>
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
