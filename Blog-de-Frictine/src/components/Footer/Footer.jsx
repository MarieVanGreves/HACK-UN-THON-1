import styles from "./Footer.module.css";
import logo from "../Footer/logowcs.png";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.hackUnThon}>Hack-Un-Thon 2023</p>
      <img src={logo} width="80px"></img>
      <p>Alexandre / Marie / Tessa / Valmont</p>
    </div>
  );
}

export default Footer;
