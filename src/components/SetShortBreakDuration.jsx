/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

const SetShortBreakDuration = () => {
  const { shortBreakDuration, setShortBreakDuration } =
    useContext(TimerContext);

  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setShortBreakDuration(newDuration * 60); // Convert minutes to seconds before updating state
  };

  // ensuring that unit is minutes on mount
  const formatTimeInMinutes = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minutes`;
  };

  return (
    <div>
      <label>
        Short break duration:
        <input
          type='range'
          value={shortBreakDuration / 60} // Convert seconds to minutes for the slider
          onChange={handleDurationChange}
          min={1}
          max={10}
        />
        {formatTimeInMinutes(shortBreakDuration)}
      </label>
    </div>
  );
};

export default SetShortBreakDuration;
