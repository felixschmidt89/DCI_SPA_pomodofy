/** @format */

import React, { useContext, useState, useEffect } from "react";
import { TimerContext } from "../contexts/TimerContext";
import TimerButton from "./TimerButton";
import playSound from "../utils/playSoundUtils";
import { remainingSecondsToMinutes } from "../utils/remainingSecondsToMinutesUtils";
import styles from "./PomodoroTimer.module.css";
import RoundProgress from "./CurrentRoundProgress";
import NoSleep from "nosleep.js";

function PomodoroTimer({ onTimerFinish }) {
  const noSleep = new NoSleep();

  const {
    timer,
    setFinishedSessions,
    finishedSessionsCurrentRound,
    setFinishedSessionsCurrentRound,
    setSessionFinished,
    sessionsPerRound,
  } = useContext(TimerContext);

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

      if (finishedSessionsCurrentRound + 1 === sessionsPerRound) {
        setSessionFinished(true); // Set sessionFinished to true
        setFinishedSessionsCurrentRound(0); // Reset finishedSessionsCurrentRound
      } else {
        setSessionFinished(false); // Reset sessionFinished
        setFinishedSessionsCurrentRound((prevSessions) => prevSessions + 1); // Increment finishedSessionsCurrentRound
      }

      playSound("/success-sound.mp3");
      onTimerFinish();
      noSleep.disable();
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [
    timerActive,
    timeRemaining,
    setFinishedSessions,
    setFinishedSessionsCurrentRound,
    setSessionFinished,
    timer,
    finishedSessionsCurrentRound,
    sessionsPerRound,
    onTimerFinish,
    noSleep,
  ]);

  const handleStart = () => {
    setTimerActive(true); // Start the timer
    setSessionFinished(false); // Prevent bugs regarding rendering BreakTimer afterwards from happening
    noSleep.enable();
  };

  const handleReset = () => {
    setTimerActive(false);
    setTimeRemaining(timer);
    setSessionFinished(false); // Reset sessionFinished
    noSleep.disable();
  };

  return (
    <div className={styles.container}>
      <p className={styles.sessionType}>Pomodoro session</p>
      <span className={styles.timer}>
        {remainingSecondsToMinutes(timeRemaining)}
      </span>

      <div className={styles.buttons}>
        <TimerButton
          type={timerActive ? "pause" : "start"}
          onClick={timerActive ? () => setTimerActive(false) : handleStart} // Toggle timer
        />
        <TimerButton type='reset' onClick={handleReset} />
      </div>
      <RoundProgress />
    </div>
  );
}

export default PomodoroTimer;
