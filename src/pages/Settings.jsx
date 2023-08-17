/** @format */

import React from "react";
import styles from "./Settings.module.css";
import SetBreakDuration from "../components/SetBreakDuration"; // Update the import
import SetSessionsPerRound from "../components/SetSessionsPerRound";
import SetTimerDuration from "../components/SetTimerDuration";
import SetAllSettingsBackToDefault from "../components/SetAllSettingsBackToDefault";
import ResetFinishedSessionsCurrentRound from "../components/ResetFinishedSessionsCurrentRound";

const Settings = () => {
  return (
    <div className={styles.container}>
      <SetTimerDuration />
      <SetBreakDuration type='short' /> {/* Pass the 'type' prop */}
      <SetBreakDuration type='long' /> {/* Pass the 'type' prop */}
      <SetSessionsPerRound />
      <SetAllSettingsBackToDefault />
      <ResetFinishedSessionsCurrentRound />
    </div>
  );
};

export default Settings;
