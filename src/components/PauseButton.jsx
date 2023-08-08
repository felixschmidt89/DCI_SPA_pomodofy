/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";

const PauseButton = ({ onClick }) => {
  return (
    <button className='pause-button' onClick={onClick}>
      <FontAwesomeIcon icon={faPause} />
    </button>
  );
};

export default PauseButton;
