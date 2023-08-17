/** @format */

import React from "react";
import styles from "../pages/Impressum.module.css"; // Import the CSS styles for Impressum
import impressumContent from "../contents/impressumContent"; // Import the impressumContent array containing sections

function Impressum() {
  return (
    <div className={styles.container}>
      <h1>Legal notice (Impressum)</h1>
      <p className={styles.note}>
        As required by the Telemediengesetz for German websites.
      </p>
      {/* Map over the impressumContent array and render each section */}
      {impressumContent.map((section) => (
        <div key={section.key}>
          <h2>{section.title}</h2> {/* Render the section title */}
          {section.content} {/* Render the content of the section */}
        </div>
      ))}
    </div>
  );
}

export default Impressum;
