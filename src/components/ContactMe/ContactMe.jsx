import React from "react";
import { Waypoint } from "react-waypoint";

import './ContactMe.css'


const ContactMe = () => {

    const navLinks = document.getElementsByTagName('a')

    const handleWaypointEnter3 = () => {
        navLinks[1].className = ''
        navLinks[2].className = ''
        navLinks[3].className = 'active'
    }

    return (
        <div className="contact-me" name="contact-me">
            <Waypoint onEnter={handleWaypointEnter3}/>
            <h2>ContactMe</h2>
            <h3>Give me a chance to show you what I can do</h3>
            <hr></hr>
            <p>I am looking for an opportunity to start working in the IT fiel and I am willing to solve any type of doubt, contact me by:</p>
            <a href="mailto:bacconsebastian@gmail.com">bacconsebastian@gmail.com</a>
        </div>
    )
}

export default ContactMe