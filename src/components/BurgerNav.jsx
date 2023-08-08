/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./BurgerNav.module.css";
import BurgerLogo from "./BurgerLogo";

function BurgerNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.nav}>
      <BurgerLogo menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <h2 className={styles.appName}>pomodofy</h2>

      <div className={styles.menuButton} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <NavLink onClick={toggleMenu} to='/'>
            Pomodofy
          </NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to='/info'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to='/settings'>
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink onClick={toggleMenu} to='/impressum'>
            Legal notice
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerNav;
