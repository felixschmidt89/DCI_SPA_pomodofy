/** @format */

import { Link } from "react-router-dom";
import styles from "./BurgerLogo.module.css";

function BurgerLogo({ toggleMenu, menuOpen }) {
  return (
    <Link to='/'>
      <img
        src='/pomodofy-website-favicon-color.png'
        alt='pomodofy logo'
        className={styles.logo}
        onClick={menuOpen ? toggleMenu : null}
      />
    </Link>
  );
}

export default BurgerLogo;
