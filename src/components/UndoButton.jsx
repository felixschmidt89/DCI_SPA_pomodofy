/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import styles from "./UndoButton.module.css";

const UndoButton = ({ onUndo, children }) => {
  return (
    <button className={styles.undoButton} onClick={onUndo}>
      <span className={styles.buttonText}>{children}</span>{" "}
      <FontAwesomeIcon icon={faUndo} />
    </button>
  );
};

export default UndoButton;
