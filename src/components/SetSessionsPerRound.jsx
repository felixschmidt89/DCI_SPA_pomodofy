/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import UndoButton from "./UndoButton"; // Import the UndoButton component
import styles from "./SetSessionsPerRound.module.css";
import { sessionsPerRoundDefault } from "../constants/timerConstants";

const SetSessionsPerRound = () => {
  const { sessionsPerRound, setSessionsPerRound } = useContext(TimerContext);

  const handleSessionsPerRoundChange = (event) => {
    const newSessionsPerRound = parseInt(event.target.value, 10);
    setSessionsPerRound(newSessionsPerRound);
  };

  const handleReset = () => {
    setSessionsPerRound(sessionsPerRoundDefault); // Reset sessions per round to 4
  };

  const shouldRenderUndoButton = sessionsPerRound !== sessionsPerRoundDefault; // Check if sessionsPerRound is not equal to default
  const isSingleSession = sessionsPerRound === 1; // Check if 1 session per round is selected

  return (
    <div className={styles.container}>
      <label>
        Sessions per round:
        <input
          type='range'
          value={sessionsPerRound}
          onChange={handleSessionsPerRoundChange}
          min={1}
          max={8}
        />
        {sessionsPerRound} {isSingleSession ? "pomodoro" : "pomodoros"}
      </label>
      {shouldRenderUndoButton && <UndoButton onUndo={handleReset} />}
    </div>
  );
};

export default SetSessionsPerRound;
