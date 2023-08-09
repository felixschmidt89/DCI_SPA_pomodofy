/** @format */

import React, { useContext, useState, useEffect } from "react";
import { TimerContext } from "../contexts/TimerContext";
import TimerButton from "./TimerButton"; // Import the TimerButton component
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
      setFinishedSessions((prevSessions) => prevSessions + 1);
      setTimeRemaining(timer);

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

      <TimerButton
        type={timerActive ? "pause" : "start"}
        onClick={() => setTimerActive(!timerActive)}
      />
      <TimerButton type='reset' onClick={handleReset} />
    </div>
  );
}

export default PomodoroTimer;
