/** @format */

import React, { useContext, useState, useEffect } from "react";
import { TimerContext } from "../contexts/TimerContext";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import ResetButton from "./ResetButton";
import FinishedSound from "./FinishedSound"; // Import the renamed component

function ShortBreakTimer() {
  const { shortBreakDuration } = useContext(TimerContext); // Use shortBreakDuration from context
  const [timeRemaining, setTimeRemaining] = useState(shortBreakDuration);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    setTimeRemaining(shortBreakDuration);
  }, [shortBreakDuration]);

  useEffect(() => {
    let timerInterval;

    if (timerActive && timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining <= 0) {
      setTimerActive(false);
      clearInterval(timerInterval);
      // Play finished sound when timer finishes
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerActive, timeRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleReset = () => {
    setTimerActive(false);
    setTimeRemaining(shortBreakDuration);
  };

  return (
    <div>
      <p>Short Break {formatTime(timeRemaining)}</p>

      {timerActive ? (
        <PauseButton onClick={() => setTimerActive(false)} />
      ) : (
        <StartButton onClick={() => setTimerActive(true)} />
      )}

      <ResetButton onClick={handleReset} />

      {timeRemaining <= 0 && <FinishedSound src='public/success-sound.mp3' />}
    </div>
  );
}

export default ShortBreakTimer;
