import styles from "../Feeds/Feeds.module.css";

function Feeds() {
    return (
        <div className={styles.feedContainer}>

            <div className={styles.firstFeed}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero recusandae ab quibusdam unde, distinctio nostrum itaque quas laboriosam culpa neque sapiente quasi officia qui iusto hic. Nulla beatae a maiores.</p>
            </div>

            <div className={styles.secondFeed}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero recusandae ab quibusdam unde, distinctio nostrum itaque quas laboriosam culpa neque sapiente quasi officia qui iusto hic. Nulla beatae a maiores.</p>
            </div>

            <div className={styles.thirdFeed}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero recusandae ab quibusdam unde, distinctio nostrum itaque quas laboriosam culpa neque sapiente quasi officia qui iusto hic. Nulla beatae a maiores.</p>
            </div>

        </div>
    );
}

export default Feeds;