/** @format */

import React from "react";
import SetLongBreakDuration from "../components/SetLongBreakDuration";
import SetSessionsPerRound from "../components/SetSessionsPerRound";
import SetShortBreakDuration from "../components/SetShortBreakDuration";
import SetTimerDuration from "../components/SetTimerDuration";

const Settings = () => {
  return (
    <div>
      <h2>Timer Settings</h2>
      <SetTimerDuration />
      <SetShortBreakDuration />
      <SetLongBreakDuration />
      <SetSessionsPerRound />
    </div>
  );
};

export default Settings;
