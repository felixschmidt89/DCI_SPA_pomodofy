/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import UndoButton from "./UndoButton"; // Import the UndoButton component
import styles from "./SetBreakDuration.module.css"; // Import the component-specific styles
import {
  shortBreakDurationDefault,
  longBreakDurationDefault,
} from "../constants/timerConstants"; // Import default break durations

const SetBreakDuration = ({ type }) => {
  // Get the necessary context values and setters from TimerContext
  const {
    shortBreakDuration,
    setShortBreakDuration,
    longBreakDuration,
    setLongBreakDuration,
  } = useContext(TimerContext);

  // Determine if it's a short break or long break based on the 'type' prop
  const isShortBreak = type === "short";

  // Determine which duration, setter, and default duration to use based on break type
  const duration = isShortBreak ? shortBreakDuration : longBreakDuration;
  const setDuration = isShortBreak
    ? setShortBreakDuration
    : setLongBreakDuration;
  const defaultDuration = isShortBreak
    ? shortBreakDurationDefault
    : longBreakDurationDefault;

  // Handle the change in duration slider
  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setDuration(newDuration * 60); // Convert minutes to seconds before updating state
  };

  // Handle the reset of duration to default
  const handleReset = () => {
    setDuration(defaultDuration * 60);
  };

  // Determine whether to render the UndoButton based on whether the duration has been changed from default
  const shouldRenderUndoButton = duration !== defaultDuration * 60;

  return (
    <div className={styles.container}>
      <label>
        {isShortBreak ? "Short break duration:" : "Long break duration:"}
        <br />
        <input
          type='range'
          value={duration / 60}
          onChange={handleDurationChange}
          // Adjust the min and max values based on the break type
          min={isShortBreak ? 1 : 15}
          max={isShortBreak ? 10 : 60}
        />
        <br />
        {`${Math.floor(duration / 60)} ${
          Math.floor(duration / 60) === 1 ? "minute" : "minutes"
        }`}{" "}
        {shouldRenderUndoButton && <UndoButton onUndo={handleReset} />}
        {/* Render the UndoButton if the duration is different from default */}
      </label>
    </div>
  );
};

export default SetBreakDuration;
