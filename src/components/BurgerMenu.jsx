/** @format */

// BurgerMenu.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./BurgerMenu.module.css";

function BurgerMenu({ menuOpen, navLinks, onNavLinkClick }) {
  return (
    <div className={`${styles.burgerMenu} ${menuOpen ? styles.open : ""}`}>
      {/* Navigation links */}
      <ul className={styles.navLinks}>
        {navLinks.map((link, index) => (
          <li key={index}>
            {/* NavLink component with onClick and to props */}
            <NavLink onClick={onNavLinkClick} to={link.to}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BurgerMenu;
