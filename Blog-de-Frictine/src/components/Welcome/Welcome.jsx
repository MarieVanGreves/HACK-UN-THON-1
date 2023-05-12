import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.containerBgTitle}>
        <h1 className={styles.welcomeTitle}>♥ Bienvenue sur mon blog ♥</h1>
        <button type="button" className={styles.welcomeBtn}>
          <Link to="/Blog"> Vers mon super blog !</Link>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
