/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import UndoButton from "./UndoButton";
import {
  timerMinutesDefault,
  shortBreakDurationDefault,
  sessionsPerRoundDefault,
  longBreakDurationDefault,
} from "../constants/timerConstants";
import styles from "./SetAllSettingsBackToDefault.module.css";

const SetAllSettingsBackToDefault = () => {
  const {
    timer,
    setTimer,
    shortBreakDuration,
    setShortBreakDuration,
    sessionsPerRound,
    setSessionsPerRound,
    longBreakDuration,
    setLongBreakDuration,
  } = useContext(TimerContext);

  const handleUndoAll = () => {
    setTimer(timerMinutesDefault * 60);
    setShortBreakDuration(shortBreakDurationDefault * 60);
    setSessionsPerRound(sessionsPerRoundDefault);
    setLongBreakDuration(longBreakDurationDefault * 60);
  };

  const shouldRenderUndoAllButton =
    timer !== timerMinutesDefault * 60 ||
    shortBreakDuration !== shortBreakDurationDefault * 60 ||
    sessionsPerRound !== sessionsPerRoundDefault ||
    longBreakDuration !== longBreakDurationDefault * 60;

  return (
    <div className={styles.container}>
      {shouldRenderUndoAllButton && (
        <UndoButton onUndo={handleUndoAll}>Set default settings</UndoButton>
      )}
    </div>
  );
};

export default SetAllSettingsBackToDefault;
