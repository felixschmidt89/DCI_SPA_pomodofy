/** @format */

// Footer.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import developerData from "../constants/developerData";
import styles from "./DeveloperInfo.module.css";

const DeveloperInfo = () => {
  return (
    <div className={styles.container}>
      {/* Map over the footerData array and render each icon with its link */}
      {developerData.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'>
          {/* Render the FontAwesomeIcon using the icon from developerData */}
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </div>
  );
};

export default DeveloperInfo;
