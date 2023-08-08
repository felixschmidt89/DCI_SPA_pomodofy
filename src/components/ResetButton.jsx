/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

const ResetButton = ({ onClick }) => {
  return (
    <button className='reset-button' onClick={onClick}>
      <FontAwesomeIcon icon={faUndo} />
    </button>
  );
};

export default ResetButton;
