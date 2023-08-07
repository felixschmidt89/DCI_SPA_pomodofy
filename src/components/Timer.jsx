/** @format */

import React, { useContext, useEffect, useState } from "react";
import { TimerContext } from "../contexts/TimerContext";

const Timer = () => {
  const {
    timer,
    isBreak,
    isRunning,
    setIsRunning,
    setTimer,
    completedSessions,
    setCompletedSessions,
    shortBreakDuration,
    longBreakDuration,
    sessionsPerRound,
  } = useContext(TimerContext);

  const [intervalType, setIntervalType] = useState("session");

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setIsRunning(false);

      if (intervalType === "session" && !isBreak) {
        setCompletedSessions((prevSessions) => prevSessions + 1);
      }

      if (completedSessions > 0 && completedSessions % sessionsPerRound === 0) {
        setIntervalType("long break");
        setTimer(longBreakDuration);
      } else if (intervalType === "session") {
        setIntervalType("short break");
        setTimer(shortBreakDuration);
      } else {
        setIntervalType("session");
        setTimer(shortBreakDuration);
      }
    }
    return () => clearInterval(interval);
  }, [
    isRunning,
    timer,
    isBreak,
    intervalType,
    completedSessions,
    sessionsPerRound,
    shortBreakDuration,
    longBreakDuration,
    setTimer,
    setIsRunning,
    setCompletedSessions,
  ]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCompletedSessions(0);
    setIntervalType("session");
    setTimer(shortBreakDuration);
  };

  return (
    <div>
      <h1>{formatTime(timer)}</h1>
      <div>
        {isRunning ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleStart}>
            Start{" "}
            {intervalType === "session"
              ? "Work"
              : intervalType === "short break"
              ? "Short Break"
              : "Long Break"}
          </button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
