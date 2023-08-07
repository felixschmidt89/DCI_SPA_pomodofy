/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

const TimerStatus = () => {
  const { isBreak, isRunning, completedSessions } = useContext(TimerContext);

  return (
    <div>
      <p>{isRunning ? "Timer is running" : "Timer is paused"}</p>
      <p>
        {isBreak
          ? "Short Break"
          : completedSessions > 0
          ? "Long Break"
          : "Pomodoro session"}
      </p>
      <p>Completed Sessions: {completedSessions}</p>
    </div>
  );
};

export default TimerStatus;
