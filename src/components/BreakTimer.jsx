/** @format */

import React, { useContext, useState, useEffect, useMemo } from "react"; // Import necessary hooks
import { TimerContext } from "../contexts/TimerContext"; // Import TimerContext
import TimerButton from "./TimerButton"; // Import TimerButton component
import RoundProgress from "./CurrentRoundProgress"; // Import RoundProgress component
import playSound from "../utils/playSoundUtils"; // Import playSound utility function
import { remainingSecondsToMinutes } from "../utils/remainingSecondsToMinutesUtils"; // Import remainingSecondsToMinutes utility function
import styles from "./BreakTimer.module.css"; // Import CSS styles
import NoSleep from "nosleep.js"; // Import NoSleep library to prevent screen from going to sleep

function BreakTimer({ onTimerFinish }) {
  // Create the noSleep object only once
  const noSleep = useMemo(() => new NoSleep(), []);

  const {
    shortBreakDuration,
    longBreakDuration,
    sessionFinished,
    setSessionFinished,
  } = useContext(TimerContext); // Access values from TimerContext

  const [timeRemaining, setTimeRemaining] = useState(
    sessionFinished ? longBreakDuration : shortBreakDuration
  ); // Initialize timeRemaining state depending on current Pomodoro session status

  const [timerActive, setTimerActive] = useState(false); // Initialize timerActive state, pause timer on mount

  useEffect(() => {
    // eslint-disable-next-line
    handleStart(); // eslint-disable-next-line
  }, []); // autostart break timer on mount.

  useEffect(() => {
    let timerInterval;

    if (timerActive && timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining <= 0) {
      playSound("/break-end-sound.mp3"); // Play sound when break ends
      setTimerActive(false);
      setTimeRemaining(
        sessionFinished ? longBreakDuration : shortBreakDuration
      ); // Reset timeRemaining
      if (sessionFinished) setSessionFinished(false); // If current Pomodoro session is finished, reset it
      onTimerFinish();
      noSleep.disable(); // Disable NoSleep to allow the screen to sleep
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
    noSleep,
  ]);

  const handleStart = () => {
    setTimerActive(!timerActive); // Toggle timerActive

    // prevent display from sleeping when timer is active
    timerActive ? noSleep.enable() : noSleep.disable();
  };

  const handleReset = () => {
    setTimerActive(false);
    setTimeRemaining(sessionFinished ? longBreakDuration : shortBreakDuration); // Reset timeRemaining on reset
    noSleep.disable(); // Disable NoSleep when resetting
  };

  return (
    <div className={styles.container}>
      <p className={styles.sessionType}>
        {sessionFinished ? "Long break" : "Short break"}{" "}
      </p>
      <div className={styles.timer}>
        {remainingSecondsToMinutes(timeRemaining)}
      </div>

      <div className={styles.buttons}>
        <TimerButton
          type={timerActive ? "pause" : "start"} // conditionally render button depending on timerActive
          onClick={handleStart}
        />
        <TimerButton type='reset' onClick={handleReset} />
      </div>
      <RoundProgress />
    </div>
  );
}

export default BreakTimer;
