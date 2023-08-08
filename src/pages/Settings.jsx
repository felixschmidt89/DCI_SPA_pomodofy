/** @format */

import React from "react";
import styles from "./Settings.module.css";

import SetLongBreakDuration from "../components/SetLongBreakDuration";
import SetSessionsPerRound from "../components/SetSessionsPerRound";
import SetShortBreakDuration from "../components/SetShortBreakDuration";
import SetTimerDuration from "../components/SetTimerDuration";

const Settings = () => {
  return (
    <div className={styles.container}>
      <h1>Settings</h1>
      <SetTimerDuration />
      <SetShortBreakDuration />
      <SetLongBreakDuration />
      <SetSessionsPerRound />
    </div>
  );
};

export default Settings;
