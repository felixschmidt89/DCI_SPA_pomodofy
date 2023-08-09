/** @format */

import React, { useState } from "react";
import styles from "./BurgerNav.module.css";
import BurgerLogo from "./BurgerLogo";
import { navLinks } from "../constants/navigationData";
import AppName from "./AppName";
import BurgerIcon from "./BurgerIcon";
import BurgerMenu from "./BurgerMenu";

function BurgerNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu called");
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    console.log("NavLink clicked");
    setMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <BurgerLogo menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <AppName />
      <BurgerIcon onClick={toggleMenu} />
      <BurgerMenu
        menuOpen={menuOpen}
        navLinks={navLinks}
        onNavLinkClick={handleNavLinkClick}
      />
    </nav>
  );
}

export default BurgerNav;
