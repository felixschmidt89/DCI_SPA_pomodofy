/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import UndoButton from "./UndoButton";
import styles from "./ResetFinishedSessionsCurrentRound.module.css";

const ResetFinishedSessionsCurrentRound = () => {
  // Access the relevant context value using useContext hook
  const { finishedSessionsCurrentRound, setFinishedSessionsCurrentRound } =
    useContext(TimerContext);

  // function to handle the reset of finishedSessionsCurrentRound

  const handleReset = () => {
    setFinishedSessionsCurrentRound(0);
  };

  return (
    <>
      {/* Display the reset button only if there are finished sessions */}
      {finishedSessionsCurrentRound > 0 && (
        <div className={styles.container}>
          {/* Render the UndoButton component and provide the handleReset function */}
          <UndoButton onUndo={handleReset}>
            Reset finished sessions current round
          </UndoButton>
        </div>
      )}
    </>
  );
};

export default ResetFinishedSessionsCurrentRound;
