/** @format */

import React, { useContext, useState, useEffect } from "react";
import { TimerContext } from "../contexts/TimerContext";
import TimerButton from "./TimerButton";
import playSound from "../utils/playSoundUtils"; // Import the playSound function
import { remainingSecondsToMinutes } from "../utils/remainingSecondsToMinutesUtils"; // Import the utility function

function BreakTimer({ onTimerFinish }) {
  const { shortBreakDuration, longBreakDuration, sessionFinished } =
    useContext(TimerContext);

  const [timeRemaining, setTimeRemaining] = useState(
    sessionFinished ? longBreakDuration : shortBreakDuration
  );

  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (timerActive && timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining <= 0) {
      playSound("public/success-sound.mp3");
      setTimerActive(false);
      setTimeRemaining(
        sessionFinished ? longBreakDuration : shortBreakDuration
      );
      onTimerFinish();
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [
    timerActive,
    timeRemaining,
    sessionFinished,
    shortBreakDuration,
    longBreakDuration,
    onTimerFinish,
  ]);

  const handleReset = () => {
    setTimerActive(false);
    setTimeRemaining(sessionFinished ? longBreakDuration : shortBreakDuration);
  };

  return (
    <div>
      <p>
        {sessionFinished ? "Long Break" : "Short Break"}{" "}
        {remainingSecondsToMinutes(timeRemaining)}
      </p>

      <TimerButton
        type={timerActive ? "pause" : "start"}
        onClick={() => setTimerActive(!timerActive)}
      />

      <TimerButton type='reset' onClick={handleReset} />
    </div>
  );
}

export default BreakTimer;
