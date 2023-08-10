/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "../constants/navigationData"; // Import the navLinks array

import styles from "./FooterNav.module.css"; // You can create a separate CSS module for styling

const FooterNav = () => {
  return (
    <div className={styles.container}>
      {navLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={styles.navLink}
          activeClassName={styles.activeNavLink}>
          <FontAwesomeIcon icon={item.icon} />
        </NavLink>
      ))}
    </div>
  );
};

export default FooterNav;
