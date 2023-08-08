/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a
          href='https://github.com/felixschmidt89/pomodofy'
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href='https://uib-final-project-bootstrap-version.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faCopyright} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
