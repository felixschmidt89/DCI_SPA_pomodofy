/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import styles from "./BurgerNav.module.css";

function BurgerNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.menuButton} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <NavLink to='/'>Pomodofy</NavLink>
        </li>
        <li>
          <NavLink to='/info'>About</NavLink>
        </li>
        <li>
          <NavLink to='/settings'>Settings</NavLink>
        </li>
        <li>
          <NavLink to='/impressum'>Legal notice</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerNav;
