/** @format */

import React from "react";
import styles from "./Info.module.css";
import infoContent from "../contents/infoContent";
import ContentSection from "../components/ContentSection";

function Info() {
  return <ContentSection styles={styles} contentArray={infoContent} />;
}

export default Info;
