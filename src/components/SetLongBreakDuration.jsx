/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

const SetLongBreakDuration = () => {
  const { longBreakDuration, setLongBreakDuration } = useContext(TimerContext);

  const handleDurationChange = (event) => {
    const newDuration = parseInt(event.target.value, 10);
    setLongBreakDuration(newDuration * 60); // Convert minutes to seconds before updating state
  };

  return (
    <div>
      <label>
        Long break duration:
        <input
          type='range'
          value={longBreakDuration / 60} // Convert seconds to minutes for the slider
          onChange={handleDurationChange}
          min={20}
          max={60}
        />
        {`${Math.floor(longBreakDuration / 60)} minutes`}
      </label>
    </div>
  );
};

export default SetLongBreakDuration;
