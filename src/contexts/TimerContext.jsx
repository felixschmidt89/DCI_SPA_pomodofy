/** @format */

import React, { createContext, useState } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(1 * 10);
  const [shortBreakDuration, setShortBreakDuration] = useState(1 * 5);
  const [longBreakDuration, setLongBreakDuration] = useState(1 * 8);
  const [sessionsPerRound, setSessionsPerRound] = useState(4);

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
