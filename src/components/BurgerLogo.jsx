/** @format */

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./BurgerLogo.module.css"; // Import CSS styles

// BurgerLogo component takes toggleMenu and menuOpen as props
function BurgerLogo({ toggleMenu, menuOpen }) {
  // Render a Link to the homepage
  return (
    <Link to='/'>
      {/* Render the logo image */}
      <img
        src='/pomodofy-website-favicon-color.png'
        alt='pomodofy logo'
        className={styles.logo} // Apply CSS class for styling
        onClick={menuOpen ? toggleMenu : null} // Conditionally apply onClick based on menuOpen
      />
    </Link>
  );
}

export default BurgerLogo; // Export the component
