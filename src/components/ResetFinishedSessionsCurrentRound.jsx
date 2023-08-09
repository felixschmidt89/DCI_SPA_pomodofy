/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import UndoButton from "./UndoButton";
import styles from "./ResetFinishedSessionsCurrentRound.module.css";

const ResetFinishedSessionsCurrentRound = () => {
  const { finishedSessionsCurrentRound, setFinishedSessionsCurrentRound } =
    useContext(TimerContext);

  const handleReset = () => {
    setFinishedSessionsCurrentRound(0);
  };

  return (
    <>
      {finishedSessionsCurrentRound > 0 && (
        <div className={styles.container}>
          <UndoButton onUndo={handleReset}>
            Reset finished sessions current round
          </UndoButton>
        </div>
      )}
    </>
  );
};

export default ResetFinishedSessionsCurrentRound;
