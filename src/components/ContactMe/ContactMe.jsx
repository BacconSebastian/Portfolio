import React from "react";
import { Waypoint } from "react-waypoint";

import "./ContactMe.css";

const ContactMe = () => {
  const navLinks = document.getElementsByTagName("a");

  const handleWaypointEnter3 = () => {
    navLinks[1].className = "";
    navLinks[2].className = "";
    navLinks[3].className = "active";
  };

  return (
    <div className="contact-me" name="contact-me">
      <Waypoint onEnter={handleWaypointEnter3} />
      <h2>ContactMe</h2>
      <h3>I'm looking for a better opportunity</h3>
      <hr></hr>
      <p>
        I am working full-time as a Frontend Developer, however, I am looking
        for a more ambitious project to improve as a professional.
        <br />
        <br />
        If you want to contact me:
      </p>
      <a href="mailto:bacconsebastian@gmail.com">bacconsebastian@gmail.com</a>
    </div>
  );
};

export default ContactMe;
