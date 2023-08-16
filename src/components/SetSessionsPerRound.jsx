/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import UndoButton from "./UndoButton"; // Import the UndoButton component
import styles from "./SetSessionsPerRound.module.css";
import { sessionsPerRoundDefault } from "../constants/timerConstants";

const SetSessionsPerRound = () => {
  // Access the sessionsPerRound state and setSessionsPerRound function from TimerContext
  const { sessionsPerRound, setSessionsPerRound } = useContext(TimerContext);

  // Handle change when the sessions per round value is modified
  const handleSessionsPerRoundChange = (event) => {
    const newSessionsPerRound = parseInt(event.target.value, 10); // Parse the value as an integer in base 10
    setSessionsPerRound(newSessionsPerRound); // Update the sessionsPerRound state
  };

  // Handle the reset of sessions per round to its default value
  const handleReset = () => {
    setSessionsPerRound(sessionsPerRoundDefault); // Reset sessions per round to its default value
  };

  // Determine whether to render the UndoButton based on changes from the default value
  const shouldRenderUndoButton = sessionsPerRound !== sessionsPerRoundDefault;

  // Check if only a single session per round is selected
  const isSingleSession = sessionsPerRound === 1;

  return (
    <div className={styles.container}>
      <label>
        Sessions/round:
        <input
          type='range'
          value={sessionsPerRound}
          onChange={handleSessionsPerRoundChange}
          min={2}
          max={8}
        />
        {sessionsPerRound} {isSingleSession ? "pomodoro" : "pomodoros"}
      </label>
      {shouldRenderUndoButton && <UndoButton onUndo={handleReset} />}
    </div>
  );
};

export default SetSessionsPerRound;
