/** @format */

import React, { useContext, useState, useEffect } from "react";
import { TimerContext } from "../contexts/TimerContext";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import ResetButton from "./ResetButton";
import { timerMinutesDefault } from "../constants/timerConstants";

function PomodoroTimer() {
  const { timer, setFinishedSessions } = useContext(TimerContext);
  const [timeRemaining, setTimeRemaining] = useState(timer);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    setTimeRemaining(timer);
  }, [timer]);

  useEffect(() => {
    let timerInterval;

    if (timerActive && timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining <= 0) {
      setTimerActive(false);
      clearInterval(timerInterval);
      setFinishedSessions((prevSessions) => prevSessions + 1); // Increase finishedSessions
      setTimeRemaining(timer); // Reset displayed timer to default value

      // Play finished sound when timer finishes
      const audio = new Audio("public/success-sound.mp3");
      audio.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerActive, timeRemaining, setFinishedSessions, timer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleReset = () => {
    setTimerActive(false);
    setTimeRemaining(timer);
  };

  return (
    <div>
      <p>Pomodoro session {formatTime(timeRemaining)}</p>

      {timerActive ? (
        <PauseButton onClick={() => setTimerActive(false)} />
      ) : (
        <StartButton onClick={() => setTimerActive(true)} />
      )}

      <ResetButton onClick={handleReset} />

      {/* No need for the <FinishedSound /> component here */}
    </div>
  );
}

export default PomodoroTimer;
