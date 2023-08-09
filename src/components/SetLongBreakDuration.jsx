/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import UndoButton from "./UndoButton"; // Import the UndoButton component
import styles from "./SetLongBreakDuration.module.css";
import { longBreakDurationDefault } from "../constants/timerConstants"; // Import the default longBreakDuration constant

const SetLongBreakDuration = () => {
  const { longBreakDuration, setLongBreakDuration } = useContext(TimerContext); // Get longBreakDuration and its setter from TimerContext

  // Handle the change in duration slider
  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setLongBreakDuration(newDuration * 60); // Convert minutes to seconds before updating state
  };

  // Handle the reset of duration to default
  const handleReset = () => {
    setLongBreakDuration(longBreakDurationDefault * 60);
  };

  // Determine whether to render the UndoButton based on whether the duration has been changed from default
  const shouldRenderUndoButton =
    longBreakDuration !== longBreakDurationDefault * 60;

  return (
    <div className={styles.container}>
      <label>
        Long break duration:
        <input
          type='range'
          value={longBreakDuration / 60}
          onChange={handleDurationChange}
          min={15}
          max={60}
          className={styles.inputRange}
        />
        {`${Math.floor(longBreakDuration / 60)} minutes`}
      </label>
      {shouldRenderUndoButton && <UndoButton onUndo={handleReset} />}{" "}
      {/* Render the UndoButton if the duration is different from default */}
    </div>
  );
};

export default SetLongBreakDuration;
