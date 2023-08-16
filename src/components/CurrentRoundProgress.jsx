/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import styles from "./CurrentRoundProgress.module.css";

function RoundProgress() {
  // Accessing timer-related data from the TimerContext
  const { sessionsPerRound, finishedSessionsCurrentRound, sessionFinished } =
    useContext(TimerContext);

  return (
    <div className={styles.container}>
      {/* Conditionally render progress based on whether the session is finished */}
      {sessionFinished ? (
        <p>Enjoy your well deserved long break! 🤝</p>
      ) : (
        <p>
          Current round progress: {finishedSessionsCurrentRound}/
          {sessionsPerRound}
        </p>
      )}
    </div>
  );
}

export default RoundProgress;
