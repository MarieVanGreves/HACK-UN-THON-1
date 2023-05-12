import styles from "../Feeds/Feeds.module.css";
import { useEffect, useState } from "react";

function Feeds() {

    const [api, setApi] = useState([])

    const fetchApi = () => {
        fetch("https://picsum.photos/v2/list?page=2&limit=1")
            .then(response => {
                return response.json()
            })
            .then(jsondata => {
                setApi(jsondata)
            })
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div className={styles.feedContainer}>

            <div className={styles.feed}>
            <div className={styles.left}>
                    {api.map(props => (
                        <li key={props.id}><img src={props.download_url} className={styles.feedImg} /></li>
                    ))}
                </div>
                <div className={styles.right}>
                <p className={styles.feedTitle}>@TESSHAPPY</p>
                <p className={styles.message}>Salut, moi c'est Tess'Happy, et je souris à la vie !</p>
            </div>
            </div>

            <div className={styles.feed}>
            <div className={styles.left}>
                    {api.map(props => (
                        <li key={props.id}><img src={props.download_url} className={styles.feedImg} /></li>
                    ))}
                </div>
                <div className={styles.right}>
                <p className={styles.feedTitle}>
                <div className={styles.left}>
                </div>@VALMOUCHE</p>
                <p className={styles.message}>Je vais arrêter les réseaux sociaux et aller à l'ANPE.</p>
            </div>
            </div>

            <div className={styles.feed}>
            <div className={styles.left}>
                    {api.map(props => (
                        <li key={props.id}><img src={props.download_url} className={styles.feedImg} /></li>
                    ))}
                </div>
                <div className={styles.right}>
                <p className={styles.feedTitle}>@MAR'HIPPIE</p>
                <p className={styles.message}>Je vous conseille ce séminaire de léchage de caillou, vous m'en direz des nouvelles !.</p>
            </div>
            </div>

            <div className={styles.feed}>
                <div className={styles.left}>
                    {api.map(props => (
                        <li key={props.id}><img src={props.download_url} className={styles.feedImg} /></li>
                    ))}
                </div>
                <div className={styles.right}>
                <p className={styles.feedTitle}>@RAN'DHOM</p>
                <p className={styles.message}>Vive les pâtes</p>
                </div>
            </div>

            <div className={styles.feed}>
                <div className={styles.left}>
                    {api.map(props => (
                        <li key={props.id}><img src={props.download_url} className={styles.feedImg} /></li>
                    ))}
                </div>
                <div className={styles.right}>
                <p className={styles.feedTitle}>@RAN'DHOM</p>
                <p className={styles.message}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo officia quis odit reiciendis quia atque repellat ipsa iure ipsum id quod alias ab cupiditate, ullam fugiat, illum impedit dignissimos in!</p>
                </div>
            </div>

            <div className={styles.feed}>
                <div className={styles.left}>
                    {api.map(props => (
                        <li key={props.id}><img src={props.download_url} className={styles.feedImg} /></li>
                    ))}
                </div>
                <div className={styles.right}>
                <p className={styles.feedTitle}>@RAN'DHOM</p>
                <p className={styles.message}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo officia quis odit reiciendis quia atque repellat ipsa iure ipsum id quod alias ab cupiditate, ullam fugiat, illum impedit dignissimos in!</p>
                </div>
            </div>

        </div>
    );
}

export default Feeds;
