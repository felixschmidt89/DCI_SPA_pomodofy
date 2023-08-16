/** @format */

// infoContent.js

import React from "react";

const infoContent = [
  {
    key: "pomodofy",
    title: "Pomodofy: The Pomodoro Technique Web App",
    content: (
      <div>
        <p>
          Pomodofy is a web application designed to boost productivity and
          improve focus using the Pomodoro Technique, a time management method
          developed by Francesco Cirillo in the late 1980s.
        </p>
      </div>
    ),
  },
  {
    key: "how-it-works",
    title: "Here's how it works:",
    content: (
      <div>
        <ol>
          <li>Choose a task: Select a task or project you want to work on.</li>
          <li>
            Set a timer: Set a timer for 25 minutes (one Pomodoro) and start
            working on the chosen task.
          </li>
          <li>
            Work: Focus solely on the task at hand during the 25-minute
            interval, avoiding any distractions or interruptions.
          </li>
          <li>
            Take a short break: When the timer rings, take a short break of
            around 5 minutes to rest and relax.
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
            Customize work and break Intervals: While the traditional Pomodoro
            technique suggests a 25-minute work interval followed by a 5-minute
            break, and a longer break after four Pomodoros, feel free to adjust
            these intervals based on your preferences and work habits.
            Experiment with different timings to find what suits you best.
          </li>
        </ol>
      </div>
    ),
  },
];

export default infoContent;
