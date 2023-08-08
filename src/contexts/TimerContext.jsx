/** @format */

import React, { createContext, useState, useEffect } from "react";
import {
  timerMinutesDefault,
  shortBreakDurationDefault,
  longBreakDurationDefault,
  sessionsPerRoundDefault,
} from "../constants/timerConstants";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
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

  // Update localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("timer", timer);
    localStorage.setItem("shortBreakDuration", shortBreakDuration);
    localStorage.setItem("longBreakDuration", longBreakDuration);
    localStorage.setItem("sessionsPerRound", sessionsPerRound);
  }, [timer, shortBreakDuration, longBreakDuration, sessionsPerRound]);

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
      }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
