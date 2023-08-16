/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import UndoButton from "./UndoButton"; // Import the UndoButton component
import styles from "./SetShortBreakDuration.module.css";
import { shortBreakDurationDefault } from "../constants/timerConstants";

const SetShortBreakDuration = () => {
  const { shortBreakDuration, setShortBreakDuration } =
    useContext(TimerContext);

  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setShortBreakDuration(newDuration * 60);
  };

  const handleReset = () => {
    setShortBreakDuration(shortBreakDurationDefault * 60); // Reset duration to 5 minutes
  };

  const formatTimeInMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes === 1 ? "1 minute" : `${minutes} minutes`}`;
  };

  const shouldRenderUndoButton =
    shortBreakDuration !== shortBreakDurationDefault * 60; // Check if shortBreakDuration is not equal to default

  return (
    <div className={styles.container}>
      <label>
        Short break:
        <input
          type='range'
          value={shortBreakDuration / 60}
          onChange={handleDurationChange}
          min={1}
          max={10}
        />
        {formatTimeInMinutes(shortBreakDuration)}
      </label>
      {shouldRenderUndoButton && <UndoButton onUndo={handleReset} />}
    </div>
  );
};

export default SetShortBreakDuration;
