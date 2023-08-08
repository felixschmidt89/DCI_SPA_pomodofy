/** @format */

import React, { createContext, useState } from "react";
import {
  timerMinutesDefault,
  shortBreakDurationDefault,
  longBreakDurationDefault,
  sessionsPerRoundDefault,
} from "../constants/timerConstants";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(timerMinutesDefault * 60);
  const [shortBreakDuration, setShortBreakDuration] = useState(
    shortBreakDurationDefault * 60
  );
  const [longBreakDuration, setLongBreakDuration] = useState(
    longBreakDurationDefault * 60
  );
  const [sessionsPerRound, setSessionsPerRound] = useState(
    sessionsPerRoundDefault
  );

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
