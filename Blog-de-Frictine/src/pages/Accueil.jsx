import Welcome from "../components/Welcome/Welcome";
import styles from "./Accueil.module.css";

function Accueil() {
  return (
    <div className={styles.containerHome}>
      <div className={styles.welcomeHome}>
        <Welcome />
      </div>
      <div>
        <img
          className={styles.fantImage}
          src="./src/assets/Fatine-dev-reconvertie-removebg-preview.png"
          alt="Fantine !"
        ></img>
      </div>
    </div>
  );
}

export default Accueil;
