import styles from './PopularSongs.module.css'

import {Avatar} from '@mui/material';


const PopularSongs = () => {
    return (
        <div className={styles.pop_songs}>
            <p>Usuários mais ativos</p>
            <div className={styles.top_usernames}>
                <div className={styles.top_username}>
                    <span className={styles.avatar}>
                        <Avatar/>
                    </span>
                    <div className={styles.top_username_info}>
                        <span className={styles.username}>Steph Curry</span>
                        <span className={styles.id_username}>@curry_steph30</span>
                    </div>
                </div>
            </div>

            <div className={styles.top_usernames}>
                <div className={styles.top_username}>
                    <span className={styles.avatar}>
                        <Avatar/>
                    </span>
                    <div className={styles.top_username_info}>
                        <span className={styles.username}>Steph Curry</span>
                        <span className={styles.id_username}>@curry_steph30</span>
                    </div>
                </div>
            </div>

            <div className={styles.top_usernames}>
                <div className={styles.top_username}>
                    <span className={styles.avatar}>
                        <Avatar/>
                    </span>
                    <div className={styles.top_username_info}>
                        <span className={styles.username}>Steph Curry</span>
                        <span className={styles.id_username}>@curry_steph30</span>
                    </div>
                </div>
            </div>

            <div className={styles.top_usernames}>
                <div className={styles.top_username}>
                    <span className={styles.avatar}>
                        <Avatar/>
                    </span>
                    <div className={styles.top_username_info}>
                        <span className={styles.username}>Steph Curry</span>
                        <span className={styles.id_username}>@curry_steph30</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PopularSongs;