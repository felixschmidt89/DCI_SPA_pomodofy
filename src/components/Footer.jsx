/** @format */

// Footer.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import footerData from "../constants/footerData"; // Import the footerData array from the footerData file

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        {/* Map over the footerData array and render each icon with its link */}
        {footerData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'>
            <FontAwesomeIcon icon={item.icon} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
