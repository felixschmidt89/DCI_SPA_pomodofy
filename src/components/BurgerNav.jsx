/** @format */

// BurgerNav.jsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./BurgerNav.module.css";
import BurgerLogo from "./BurgerLogo";
import { navLinks } from "../constants/navigationData"; // Import the navLinks array from the navigationData file

function BurgerNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.nav}>
      {/* BurgerLogo component with menuOpen and toggleMenu props */}
      <BurgerLogo menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* Application name */}
      <h2 className={styles.appName}>pomodofy</h2>

      {/* Hamburger menu button */}
      <div className={styles.menuButton} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Navigation links */}
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link, index) => (
          <li key={index}>
            {/* NavLink component with onClick and to props */}
            <NavLink onClick={toggleMenu} to={link.to}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BurgerNav;
