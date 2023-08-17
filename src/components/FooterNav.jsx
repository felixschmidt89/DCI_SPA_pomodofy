/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "../constants/navigationData"; // Import the navLinks array

import styles from "./FooterNav.module.css";

const FooterNav = () => {
  return (
    <div className={styles.container}>
      {/* Map over the navLinks array and render each NavLink */}
      {navLinks.map((item, index) => (
        <NavLink key={index} to={item.to}>
          <FontAwesomeIcon icon={item.icon} />
        </NavLink>
      ))}
    </div>
  );
};

export default FooterNav;
