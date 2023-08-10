/** @format */

import React, { useState } from "react";
import BreakTimer from "../components/BreakTimer";
import PomodoroTimer from "../components/PomodoroTimer";
import styles from "./Pomodofy.module.css";

function Pomodofy() {
  const [isPomodoro, setIsPomodoro] = useState(true);

  const handleTimerFinish = () => {
    setIsPomodoro(!isPomodoro); // Toggle between Pomodoro and BreakTimer
  };

  return (
    <main className={styles.container}>
      {isPomodoro ? (
        <PomodoroTimer onTimerFinish={handleTimerFinish} />
      ) : (
        <BreakTimer onTimerFinish={handleTimerFinish} />
      )}
    </main>
  );
}

export default Pomodofy;
