/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import UndoButton from "./UndoButton"; // Import the UndoButton component
import styles from "./SetLongBreakDuration.module.css";
import { longBreakDurationDefault } from "../constants/timerConstants";

const SetLongBreakDuration = () => {
  const { longBreakDuration, setLongBreakDuration } = useContext(TimerContext);

  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setLongBreakDuration(newDuration * 60); // Convert minutes to seconds before updating state
  };

  const handleReset = () => {
    setLongBreakDuration(longBreakDurationDefault * 60); // Reset duration to 45 minutes
  };

  const shouldRenderUndoButton =
    longBreakDuration !== longBreakDurationDefault * 60; // Check if longBreakDuration is not equal to default

  return (
    <div className={styles.container}>
      <label>
        Long break duration:
        <input
          type='range'
          value={longBreakDuration / 60}
          onChange={handleDurationChange}
          min={20}
          max={60}
          className={styles.inputRange}
        />
        {`${Math.floor(longBreakDuration / 60)} minutes`}
      </label>
      {shouldRenderUndoButton && <UndoButton onUndo={handleReset} />}
    </div>
  );
};

export default SetLongBreakDuration;
