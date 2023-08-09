/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faUndo } from "@fortawesome/free-solid-svg-icons";
import styles from "./TimerButton.module.css";

const TimerButton = ({ type, onClick }) => {
  // Initialize a variable to store the FontAwesome icon associated with the button type
  let icon = null;

  // Determine the icon based on the button type
  switch (type) {
    case "start":
      icon = faPlay; // Set the icon to the play icon
      break;
    case "pause":
      icon = faPause; // Set the icon to the pause icon
      break;
    case "reset":
      icon = faUndo; // Set the icon to the reset icon
      break;
    default:
      // If the button type is not recognized, the icon remains null
      break;
  }

  // Render the button with the appropriate icon and click handler
  return (
    <button className={`${styles[type + "-button"]}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default TimerButton;
