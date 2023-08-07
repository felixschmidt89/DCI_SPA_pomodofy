/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

const SetTimerDuration = () => {
  const { timer, setTimer } = useContext(TimerContext);

  const handleDurationChange = (event) => {
    const newDurationValue = parseInt(event.target.value, 10);
    // Ensure the new duration is within the range of 15 to 45 minutes
    const clampedDuration = Math.max(15, Math.min(newDurationValue, 45));
    setTimer(clampedDuration * 60); // Convert minutes to seconds
  };

  const handleReset = () => {
    setTimer(25 * 60); // Reset duration to 25 minutes
  };

  return (
    <div>
      <label>
        Session duration:
        <input
          type='range'
          value={timer / 60} // Convert seconds to minutes for the slider value
          onInput={handleDurationChange} // Use onInput event for real-time updates while sliding
          min={15}
          max={45}
        />
        {timer / 60} minutes
      </label>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default SetTimerDuration;
