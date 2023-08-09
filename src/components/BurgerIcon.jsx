/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./BurgerIcon.module.css";

function BurgerIcon({ onClick }) {
  const handleClick = () => {
    console.log("BurgerIcon clicked");
    onClick(); // Call the parent's onClick function
  };

  return (
    <div className={styles.menuButton} onClick={handleClick}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}

export default BurgerIcon;
