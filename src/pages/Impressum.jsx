/** @format */

import React from "react";
import styles from "./Impressum.module.css";
import impressumContent from "../contents/impressumContent";
import ContentSection from "../components/ContentSection";

function Impressum() {
  return <ContentSection styles={styles} contentArray={impressumContent} />;
}

export default Impressum;
