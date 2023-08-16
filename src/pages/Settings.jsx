/** @format */

import React from "react";
import styles from "./Settings.module.css"; // Import styles

// Import components used in this module
import SetLongBreakDuration from "../components/SetLongBreakDuration";
import SetSessionsPerRound from "../components/SetSessionsPerRound";
import SetShortBreakDuration from "../components/SetShortBreakDuration";
import SetTimerDuration from "../components/SetTimerDuration";
import SetAllSettingsBackToDefault from "../components/SetAllSettingsBackToDefault";
import ResetFinishedSessionsCurrentRound from "../components/ResetFinishedSessionsCurrentRound";

const Settings = () => {
  return (
    <div className={styles.container}>
      {/* Render individual settings components */}
      <SetTimerDuration />
      <SetShortBreakDuration />
      <SetLongBreakDuration />
      <SetSessionsPerRound />
      <SetAllSettingsBackToDefault />
      <ResetFinishedSessionsCurrentRound />
    </div>
  );
};

export default Settings;
