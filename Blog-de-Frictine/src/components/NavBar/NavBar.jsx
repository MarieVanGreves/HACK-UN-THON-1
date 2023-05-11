import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img
            className={styles.fritineLogo}
            src={logo}
            alt="Logo d'Au Pays de Fritine et Fanny"
          />
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              exact
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
