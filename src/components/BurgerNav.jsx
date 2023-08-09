/** @format */

import React, { useState } from "react";
import styles from "./BurgerNav.module.css";
import BurgerLogo from "./BurgerLogo";
import { navLinks } from "../constants/navigationData"; // Import the navLinks array from the navigationData file
import AppName from "./AppName";
import BurgerIcon from "./BurgerIcon";
import BurgerMenu from "./BurgerMenu";

function BurgerNav() {
  // State to manage the menu's open/closed state
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle click on navigation links
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    // Navigation bar container with CSS class from the imported styles
    <nav className={styles.nav}>
      {/* Render the BurgerLogo component with menuOpen and toggleMenu props */}
      <BurgerLogo menuOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* Render the AppName component */}
      <AppName />

      {/* Render the BurgerIcon component with onClick prop */}
      <BurgerIcon onClick={toggleMenu} />

      {/* Render the BurgerMenu component with menuOpen, navLinks, and onNavLinkClick props */}
      <BurgerMenu
        menuOpen={menuOpen}
        navLinks={navLinks}
        onNavLinkClick={handleNavLinkClick}
      />
    </nav>
  );
}

export default BurgerNav;
