import styles from "../Feeds/Feeds.module.css";
import { useEffect, useState } from "react";
import tessa from "../../assets/tessa.png";
import marie from "../../assets/marie.png";
import val from "../../assets/val.png";
import alex from "../../assets/alex.png";

function Feeds() {
  const [api, setApi] = useState([]);

  const fetchApi = () => {
    fetch("https://picsum.photos/v2/list?page=2&limit=1")
      .then((response) => {
        return response.json();
      })
      .then((jsondata) => {
        setApi(jsondata);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={styles.feedContainer}>
      <div className={styles.feed}>
        <div className={styles.left}>
          <img className={styles.feedImg} src={tessa} />
        </div>
        <div className={styles.right}>
          <p className={styles.feedTitle}>@TESSHAPPY</p>
          <p className={styles.message}>
            Salut, moi c'est Tess'Happy, et je souris a la vie !
          </p>
        </div>
      </div>

      <div className={styles.feed}>
        <div className={styles.left}>
          <img src={val} className={styles.feedImg} />
        </div>
        <div className={styles.right}>
          <p className={styles.feedTitle}>
            <div className={styles.left}></div>@VALMOUCHE
          </p>
          <p className={styles.message}>
            Je vais arreter les reseaux sociaux et aller a l'ANPE.
          </p>
        </div>
      </div>

      <div className={styles.feed}>
        <div className={styles.left}>
          <img src={marie} className={styles.feedImg} />
        </div>
        <div className={styles.right}>
          <p className={styles.feedTitle}>@MAR'HIPPIE</p>
          <p className={styles.message}>
            Je vous conseille ce seminaire de lechage de caillou, vous m'en
            direz des nouvelles !
          </p>
        </div>
      </div>

      <div className={styles.feed}>
        <div className={styles.left}>
          <img src={alex} className={styles.feedImg} />
        </div>
        <div className={styles.right}>
          <p className={styles.feedTitle}>@ALEX'KUZBIDON</p>
          <p className={styles.message}>
            Ou suis-je tombe ? Un univers parallele ?{" "}
          </p>
        </div>
      </div>
      <div className={styles.feed}>
        <div className={styles.left}>
          {api.map((props) => (
            <li key={props.id}>
              <img src={props.download_url} className={styles.feedImg} />
            </li>
          ))}
        </div>
        <div className={styles.right}>
          <p className={styles.feedTitle}>@RAND'HOME</p>
          <p className={styles.message}>
            Hey coucou, je suis Rand'Hom , j'aime trop me dorer la pillule !
          </p>
        </div>
      </div>
    </div>
  );
}
export default Feeds;
