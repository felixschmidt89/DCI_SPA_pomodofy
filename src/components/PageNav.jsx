/** @format */

import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to='/pomodofy'>Timer</Link>
        </li>
        <li>
          <Link to='/info'>Info</Link>
        </li>
        <li>
          <Link to='/settings'>Settings</Link>
        </li>
        <li>
          <Link to='/impressum'>Legal note</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
