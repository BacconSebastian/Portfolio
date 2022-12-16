import React from "react";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <Link to="about-me">
        <h1 title="SB">SB</h1>
      </Link>
      <div className="navlinks">
        <Link to="about-me" className="active">
          {"{ AboutMe }"}
        </Link>
        <Link to="projects">{"{ Projects }"}</Link>
        <Link to="contact-me">{"{ ContactMe }"}</Link>
        <a
          href="https://drive.google.com/file/d/16JCrwVGCPBIdwtB0BN1wz2boNJzG-Xn6/view?usp=sharing"
          target="blank"
          id="downloadCV"
        >
          Download CV
        </a>
      </div>
      <a href="#about-me" className="anchor-down">
        <FontAwesomeIcon className="icon-down" icon={faAnglesDown} />
      </a>
    </nav>
  );
};

export default Nav;
