import React from "react";
import { Waypoint } from "react-waypoint";

import './Projects.css'
import Movies from './img/movies.jpg'
import Tateti from './img/tateti.jpg'
import Weather from './img/weather.jpg'


const Projects = () => {

    const buttons = document.getElementsByTagName('li')
    const images = document.getElementsByTagName('img')
    const toDown = document.getElementsByClassName('anchor-down')

    const handleClick1 = () => {
        buttons[0].className = 'active'
        buttons[1].className = ''
        buttons[2].className = ''
        images[0].className = 'active'
        images[1].className = ''
        images[2].className = ''
    }
    const handleClick2 = () => {
        buttons[0].className = ''
        buttons[1].className = 'active'
        buttons[2].className = ''
        images[0].className = ''
        images[1].className = 'active'
        images[2].className = ''
    }
    const handleClick3 = () => {
        buttons[0].className = ''
        buttons[1].className = ''
        buttons[2].className = 'active'
        images[0].className = ''
        images[1].className = ''
        images[2].className = 'active'
    }

    const navLinks = document.getElementsByTagName('a')

    const handleWaypointEnter2 = () => {
        navLinks[1].className = ''
        navLinks[2].className = 'active'
        navLinks[3].className = ''
        toDown[0].href = '#contact-me'
    }


    return (
        <div className="projects">
            <Waypoint onEnter={handleWaypointEnter2}/>
            <h2>Projects</h2>
            <div className="sub-projects">
                <ul className="name-projects">
                    <li id="primera" className="active" onClick={handleClick1}><strong>01</strong> | Movies</li>
                    <li id="segunda" onClick={handleClick2}><strong>02</strong> | Weather</li>
                    <li id="tercera" onClick={handleClick3}><strong>03</strong> | Tic-tac-toe</li>
                    <a href="https://github.com/BacconSebastian?tab=repositories" target="blank">Otros...</a>
                </ul>
                <a href="https://www.linkedin.com/posts/bacconsebastian_react-redux-css-activity-6961064891747041280-E3Gu?utm_source=linkedin_share&utm_medium=member_desktop_web" target="blank"><img className="active" src={Movies} alt=''/></a>
                <a href="https://www.linkedin.com/posts/bacconsebastian_react-css3-api-activity-6963614056570105856-RDu_?utm_source=linkedin_share&utm_medium=member_desktop_web" target="blank"><img src={Weather} alt=''/></a>
                <a href="https://tateti-baccon.netlify.app/" target="blank"><img src={Tateti} alt=''/></a>
            </div>
        </div>
    )
}

export default Projects