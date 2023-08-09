/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import UndoButton from "./UndoButton"; // Import the UndoButton component
import styles from "./SetTimerDuration.module.css";
import { timerMinutesDefault } from "../constants/timerConstants";

const SetTimerDuration = () => {
  const { timer, setTimer } = useContext(TimerContext);

  const handleDurationChange = (event) => {
    const newDurationValue = parseInt(event.target.value, 10);
    setTimer(newDurationValue * 60); // Convert minutes to seconds
  };

  const handleReset = () => {
    setTimer(timerMinutesDefault * 60); // Reset duration to 25 minutes
  };

  const shouldRenderUndoButton = timer !== timerMinutesDefault * 60; // Check if timer is not equal to default

  return (
    <div className={styles.container}>
      <label>
        Session duration:
        <input
          type='range'
          value={timer / 60}
          onInput={handleDurationChange}
          min={15}
          max={45}
        />
        {timer / 60} minutes
      </label>
      {shouldRenderUndoButton && <UndoButton onUndo={handleReset} />}
    </div>
  );
};

export default SetTimerDuration;
