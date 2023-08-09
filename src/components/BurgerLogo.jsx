/** @format */

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function BurgerLogo({ toggleMenu, menuOpen }) {
  // Style object to set the height of the logo
  const logoStyle = {
    height: "5rem",
  };

  // Render the logo
  return (
    <Link to='/'>
      <img
        src='/pomodofy-website-favicon-color.png'
        alt='pomodofy logo'
        onClick={menuOpen ? toggleMenu : null} // If BurgerMenu is open, close BurgerMenu by clicking the logo.
        style={logoStyle}
      />
    </Link>
  );
}

export default BurgerLogo;
