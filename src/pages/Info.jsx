/** @format */

// Info.jsx

import React from "react";
import styles from "./Info.module.css";
import infoContent from "../contents/infoContent"; // Import the infoContent array

function Info() {
  return (
    <div className={styles.container}>
      {/* Map over the infoContent array */}
      {infoContent.map((section) => (
        <div key={section.key}>
          {section.content} {/* Render the content for each section */}
        </div>
      ))}
    </div>
  );
}

export default Info;
