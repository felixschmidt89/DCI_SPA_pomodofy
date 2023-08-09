/** @format */

import React, { useContext, useState, useEffect } from "react";
import { TimerContext } from "../contexts/TimerContext";
import TimerButton from "./TimerButton";
import playSound from "../utils/playSoundUtils"; // Import the playSound function
import { remainingSecondsToMinutes } from "../utils/remainingSecondsToMinutesUtils"; // Import the utility function
import RoundProgress from "./CurrentRoundProgress";
import styles from "./BreakTimer.module.css";

function BreakTimer({ onTimerFinish }) {
  const {
    shortBreakDuration,
    longBreakDuration,
    sessionFinished,
    setSessionFinished,
  } = useContext(TimerContext);

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
      playSound("public/break-end-sound.mp3");
      setTimerActive(false);
      setTimeRemaining(
        sessionFinished ? longBreakDuration : shortBreakDuration
      );
      if (sessionFinished) setSessionFinished(false);
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
    setSessionFinished,
  ]);

  const handleReset = () => {
    setTimerActive(false);
    setTimeRemaining(sessionFinished ? longBreakDuration : shortBreakDuration);
  };

  return (
    <div className={styles.container}>
      <p className={styles.sessionType}>
        {sessionFinished ? "Long Break" : "Short Break"}{" "}
      </p>
      <div className={styles.timer}>
        {remainingSecondsToMinutes(timeRemaining)}
      </div>

      <div className={styles.buttons}>
        <TimerButton
          type={timerActive ? "pause" : "start"}
          onClick={() => setTimerActive(!timerActive)}
        />
        <TimerButton type='reset' onClick={handleReset} />
      </div>
      <RoundProgress />
    </div>
  );
}

export default BreakTimer;
