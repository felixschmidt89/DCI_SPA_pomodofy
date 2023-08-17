/** @format */

import React, { useContext, useState, useEffect, useMemo } from "react";
import { TimerContext } from "../contexts/TimerContext";
import TimerButton from "./TimerButton";
import playSound from "../utils/playSoundUtils";
import { remainingSecondsToMinutes } from "../utils/remainingSecondsToMinutesUtils";
import styles from "./PomodoroTimer.module.css";
import RoundProgress from "./CurrentRoundProgress";
import NoSleep from "nosleep.js";

function PomodoroTimer({ onTimerFinish }) {
  // Create the noSleep object only once using useMemo
  const noSleep = useMemo(() => new NoSleep(), []);

  // Extract the necessary global state using destructuring
  const {
    timer,
    setFinishedSessions,
    finishedSessionsCurrentRound,
    setFinishedSessionsCurrentRound,
    setSessionFinished,
    sessionsPerRound,
  } = useContext(TimerContext);

  // local states, use global states as defaults
  const [timeRemaining, setTimeRemaining] = useState(timer);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    // timer functionality:
    let timerInterval;
    if (timerActive && timeRemaining > 0) {
      // Start the timer interval only if timer is active and time is remaining
      timerInterval = setInterval(() => {
        // Decrease the time remaining by 1 second
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining <= 0) {
      // Timer finished, update states and handle session completion

      setTimerActive(false);
      playSound("/success-sound.mp3");
      setFinishedSessions((prevSessions) => prevSessions + 1); // increment finished total session count
      setTimeRemaining(timer); // Reset local state

      if (finishedSessionsCurrentRound + 1 === sessionsPerRound) {
        setSessionFinished(true); // Set sessionFinished to true
        setFinishedSessionsCurrentRound(0); // Reset finishedSessionsCurrentRound
      } else {
        setSessionFinished(false); // Reset sessionFinished
        setFinishedSessionsCurrentRound((prevSessions) => prevSessions + 1); // Increment finishedSessionsCurrentRound
      }

      onTimerFinish(); // toggle parent's state to show BreakTimer next
      noSleep.disable(); // allow screen to sleep again
    }

    // cleanup function ensuring that the timer is stopped
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
    noSleep.enable(); // Prevent screen from going to sleep
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
