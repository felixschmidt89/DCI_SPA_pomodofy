/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { navLinks } from "../constants/navigationData"; // Import the navLinks array from the navigationData file

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        {/* Map over the navLinks array and render each navigation link */}
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.to}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PageNav;
