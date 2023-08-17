/** @format */

import React, { createContext, useState, useEffect } from "react";
import {
  timerMinutesDefault,
  shortBreakDurationDefault,
  longBreakDurationDefault,
  sessionsPerRoundDefault,
  finishedSessionsDefault,
} from "../constants/timerConstants"; // Import the default values

const TimerContext = createContext(); // Create a context for managing timer data

const TimerProvider = ({ children }) => {
  // Initialize state variables using localStorage or defaults
  const [timer, setTimer] = useState(
    parseInt(localStorage.getItem("timer")) || timerMinutesDefault * 60
  );
  const [shortBreakDuration, setShortBreakDuration] = useState(
    parseInt(localStorage.getItem("shortBreakDuration")) ||
      shortBreakDurationDefault * 60
  );
  const [longBreakDuration, setLongBreakDuration] = useState(
    parseInt(localStorage.getItem("longBreakDuration")) ||
      longBreakDurationDefault * 60
  );
  const [sessionsPerRound, setSessionsPerRound] = useState(
    parseInt(localStorage.getItem("sessionsPerRound")) ||
      sessionsPerRoundDefault
  );

  const [finishedSessions, setFinishedSessions] = useState(
    parseInt(localStorage.getItem("finishedSessions")) ||
      finishedSessionsDefault
  );

  const [finishedSessionsCurrentRound, setFinishedSessionsCurrentRound] =
    useState(
      parseInt(localStorage.getItem("finishedSessionsCurrentRound")) || 0
    );

  const [sessionFinished, setSessionFinished] = useState(
    localStorage.getItem("sessionFinished") === "true" || false
  );

  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("timer", timer);
    localStorage.setItem("shortBreakDuration", shortBreakDuration);
    localStorage.setItem("longBreakDuration", longBreakDuration);
    localStorage.setItem("sessionsPerRound", sessionsPerRound);
    localStorage.setItem("finishedSessions", finishedSessions);
    localStorage.setItem(
      "finishedSessionsCurrentRound",
      finishedSessionsCurrentRound
    );
    localStorage.setItem("sessionFinished", sessionFinished);
  }, [
    timer,
    shortBreakDuration,
    longBreakDuration,
    sessionsPerRound,
    finishedSessions,
    finishedSessionsCurrentRound,
    sessionFinished,
  ]);

  // Provide the state values and setters to the child components
  return (
    <TimerContext.Provider
      value={{
        timer,
        setTimer,
        shortBreakDuration,
        setShortBreakDuration,
        longBreakDuration,
        setLongBreakDuration,
        sessionsPerRound,
        setSessionsPerRound,
        finishedSessions,
        setFinishedSessions,
        finishedSessionsCurrentRound,
        setFinishedSessionsCurrentRound,
        sessionFinished,
        setSessionFinished,
      }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider }; // Export the TimerContext and TimerProvider for use in other components
