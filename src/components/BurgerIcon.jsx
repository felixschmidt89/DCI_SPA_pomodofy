/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function BurgerIcon({ onClick }) {
  // Function to handle the click event
  const handleClick = () => {
    onClick(); // Call the parent's onClick function to toggle the burger menu
  };

  // Style object to set the font size of the icon

  const iconStyle = {
    fontSize: "3rem",
  };

  return (
    <div onClick={handleClick} style={iconStyle}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}

export default BurgerIcon;
