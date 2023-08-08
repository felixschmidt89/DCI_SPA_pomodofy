/** @format */

import React from "react";
import styles from "./Info.module.css";

function Info() {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <h2>Pomodofy: The Pomodoro Technique Web App</h2>
      <p>
        Pomodofy is a web application designed to boost productivity and improve
        focus using the Pomodoro Technique, a time management method developed
        by Francesco Cirillo in the late 1980s. The app's name, "Pomodofy,"
        combines "Pomodoro" (Italian for tomato, inspired by the tomato-shaped
        timer) with "modify," signifying the positive transformation the
        technique brings to users' work routines.
      </p>
      <h2>Here's how the Pomodoro Technique works:</h2>
      <ol>
        <li>Choose a task: Select a task or project you want to work on.</li>
        <li>
          Set a timer: Set a timer for 25 minutes (one Pomodoro) and start
          working on the chosen task.
        </li>
        <li>
          Work: Focus solely on the task at hand during the 25-minute interval,
          avoiding any distractions or interruptions.
        </li>
        <li>
          Take a short break: When the timer rings, take a short break of around
          5 minutes to rest and relax.
        </li>
        <li>
          Repeat: After the break, start another Pomodoro by setting the timer
          for 25 minutes and continuing to work on the task.
        </li>
        <li>
          Take longer breaks: After completing four Pomodoros (four 25-minute
          work intervals), take a longer break of around 15-30 minutes.
        </li>
        <li>
          Customize Work and Break Intervals: While the traditional Pomodoro
          technique suggests a 25-minute work interval followed by a 5-minute
          break, and a longer break after four Pomodoros, feel free to adjust
          these intervals based on your preferences and work habits. Experiment
          with different timings to find what suits you best.
        </li>
      </ol>
    </div>
  );
}

export default Info;
