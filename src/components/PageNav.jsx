/** @format */

import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to='/'>Timer</NavLink>
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

export default PageNav;
