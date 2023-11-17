import PopularSongs from "../PopularSongs/PopularSongs";
import Post from "../Posts/Post";
import styles from "./Timeline.module.css";

import Logo from '../../images/logo_violearn-removebg-preview 1.svg';


const Timeline = () => {
    return (
        <div className={styles.timeline}>
            <div className={styles.timeline_left}>
                <div className={styles.timeline_posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
            <div className={styles.timeline_right}>
                <PopularSongs/>
            </div>
        </div>
    )
}

export default Timeline;