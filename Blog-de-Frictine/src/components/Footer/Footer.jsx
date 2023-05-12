import styles from "./Footer.module.css";
import logo from "../Footer/logowcs.png";
import Modal from "../Modal/Modal";
import { useState } from "react";

function Footer() {
  const [shown, setShown] = useState(false);

  return (
    <div className={styles.footerContainer}>
      <p
        className={styles.hackUnThon}
        onClick={() => {
          setShown(!shown);
        }}
      >
        Hack-Un-Thon 2023
      </p>

      <Modal shown={shown} setShown={setShown} />

      <img src={logo} width="80px"></img>
      <p>Alexandre / Marie / Tessa / Valmont</p>
    </div>
  );
}

export default Footer;
