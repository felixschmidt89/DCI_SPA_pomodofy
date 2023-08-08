/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const StartButton = ({ onClick }) => {
  return (
    <button className='start-button' onClick={onClick}>
      <FontAwesomeIcon icon={faPlay} />
    </button>
  );
};

export default StartButton;
