/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

const SetSessionsPerRound = () => {
  const { sessionsPerRound, setSessionsPerRound } = useContext(TimerContext);

  const handleSessionsPerRoundChange = (event) => {
    const newSessionsPerRound = parseInt(event.target.value, 10);
    setSessionsPerRound(newSessionsPerRound);
  };

  return (
    <div>
      <label>
        Sessions per round:
        <input
          type='range'
          value={sessionsPerRound}
          onChange={handleSessionsPerRoundChange}
          min={1}
          max={8}
        />
        {sessionsPerRound} pomodoros
      </label>
    </div>
  );
};

export default SetSessionsPerRound;
