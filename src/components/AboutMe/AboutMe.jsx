import React from "react";
import { Waypoint } from "react-waypoint";

import './AboutMe.css'


const AboutMe = () => {

    const navLinks = document.getElementsByTagName('a')
    const toDown = document.getElementsByClassName('anchor-down')

    const handleWaypointEnter1 = () => {
        navLinks[1].className = 'active'
        navLinks[2].className = ''
        navLinks[3].className = ''
        toDown[0].href = '#projects'
    }

    return (
        <div className="about-me" name="about-me">
            <Waypoint onEnter={handleWaypointEnter1}/>
            <p>Hi, my name is</p>
            <h2>Sebastian Baccon</h2>
            <p className="full-stack">Full Stack Developer</p>
            <hr/>
            <p>I am a Systems student at the National University of General Sarmiento (Argentina). Currently I am dedicated to Full Stack Development principally with:</p>
            <p className="tecs">React.js - Node.js - PostgreSQL</p>
        </div>
    )
}

export default AboutMe