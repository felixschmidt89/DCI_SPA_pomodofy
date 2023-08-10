/** @format */

import React, { useState } from "react";
import BreakTimer from "../components/BreakTimer";
import PomodoroTimer from "../components/PomodoroTimer";

function Pomodofy() {
  const [isPomodoro, setIsPomodoro] = useState(true);

  const handleTimerFinish = () => {
    setIsPomodoro(!isPomodoro); // Toggle between Pomodoro and BreakTimer
  };

  return (
    <main>
      {isPomodoro ? (
        <PomodoroTimer onTimerFinish={handleTimerFinish} />
      ) : (
        <BreakTimer onTimerFinish={handleTimerFinish} />
      )}
    </main>
  );
}

export default Pomodofy;
