import Posts from "../components/Posts/Posts";
import styles from "./Blog.module.css";

import Feeds from "../components/Feeds/Feeds";
// import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles.containerPage}>
      <Posts />
      <Feeds />
    </div>
  );
}

export default Blog;
