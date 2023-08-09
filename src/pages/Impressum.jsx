/** @format */

import React from "react";
import styles from "./Impressum.module.css";
import impressumContent from "../contents/impressumContent"; // Import the impressumContent array

function Impressum() {
  return (
    <div className={styles.container}>
      {/* Map over the impressumContent array and render each section */}
      {impressumContent.map((section) => (
        <div key={section.key}>{section.content}</div>
      ))}
    </div>
  );
}

export default Impressum;
