/** @format */

import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import styles from "./BurgerMenu.module.css"; // Import CSS styles

function BurgerMenu({ menuOpen, navLinks, onNavLinkClick }) {
  return (
    // Apply CSS classes to control the visibility of the menu based on menuOpen
    <div className={`${styles.burgerMenu} ${menuOpen ? styles.open : ""}`}>
      {/* Navigation links */}
      <ul className={styles.navLinks}>
        {/* Map through navigation links and create list items */}
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

export default BurgerMenu; // Export the component
