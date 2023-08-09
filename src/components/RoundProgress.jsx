/** @format */

import React, { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";

function RoundProgress() {
  const { sessionsPerRound, finishedSessionsCurrentRound, sessionFinished } =
    useContext(TimerContext);

  return (
    <div>
      {sessionFinished ? (
        <p>Enjoy your well deserved long break!</p>
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
