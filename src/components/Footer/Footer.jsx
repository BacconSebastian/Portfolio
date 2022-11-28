import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="vBar1"></div>
      <a
        href="https://www.linkedin.com/in/sebastian-baccon-226b961ab/"
        target="blank"
      >
        <FontAwesomeIcon className="icon linkedin" icon={faLinkedinIn} />
      </a>
      <a
        href="https://github.com/BacconSebastian?tab=repositories"
        target="blank"
      >
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </a>
      <a href="mailto:bacconsebastian@gmail.com" target="blank">
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
      </a>
      <div className="vBar2"></div>
    </footer>
  );
};

export default Footer;
