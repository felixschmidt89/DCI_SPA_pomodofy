/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import styles from "./CurrentRoundProgress.module.css";

function RoundProgress() {
  const { sessionsPerRound, finishedSessionsCurrentRound, sessionFinished } =
    useContext(TimerContext);

  return (
    <div className={styles.container}>
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
