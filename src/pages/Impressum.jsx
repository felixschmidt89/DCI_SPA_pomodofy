/** @format */

import React from "react";
import styles from "./Impressum.module.css";
import impressumContent from "../contents/impressumContent";
import ContentSection from "../components/ContentSection";

function Impressum() {
  return (
    <div>
      <h1>Legal notice (Impressum)</h1>
      <p className={styles.note}>
        As required by the Telemediengesetz for German websites.
      </p>
      <ContentSection styles={styles} contentArray={impressumContent} />
    </div>
  );
}

export default Impressum;
