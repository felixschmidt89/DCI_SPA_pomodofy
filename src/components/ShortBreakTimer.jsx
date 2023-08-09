/** @format */

import React, { useContext, useState, useEffect } from "react";
import { TimerContext } from "../contexts/TimerContext";
import TimerButton from "./TimerButton";
import playSound from "../utils/playSoundUtils"; // Import the playSound function
import { remainingSecondsToMinutes } from "../utils/remainingSecondsToMinutesUtils"; // Import the utility function

function ShortBreakTimer() {
  const { shortBreakDuration } = useContext(TimerContext);
  const [timeRemaining, setTimeRemaining] = useState(shortBreakDuration);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let timerInterval;

    // Start or resume the timer
    if (timerActive && timeRemaining > 0) {
      timerInterval = setInterval(() => {
        // Decrease the time remaining by 1 second
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }
    // Timer finished
    else if (timeRemaining <= 0) {
      setTimerActive(false); // Pause the timer
      playSound("public/success-sound.mp3"); // Play sound when timer finishes
      setTimeRemaining(shortBreakDuration); // Reset the timer to the initial duration
    }

    return () => {
      clearInterval(timerInterval); // Clean up the timer interval
    };
  }, [timerActive, timeRemaining, shortBreakDuration]);

  // Handle the reset button click
  const handleReset = () => {
    setTimerActive(false); // Pause the timer
    setTimeRemaining(shortBreakDuration); // Reset the timer to the initial duration
  };

  return (
    <div>
      <p>Short Break {remainingSecondsToMinutes(timeRemaining)}</p>

      {/* Display the appropriate button based on the timer's state */}
      <TimerButton
        type={timerActive ? "pause" : "start"}
        onClick={() => setTimerActive(!timerActive)}
      />

      {/* Reset button */}
      <TimerButton type='reset' onClick={handleReset} />
    </div>
  );
}

export default ShortBreakTimer;
