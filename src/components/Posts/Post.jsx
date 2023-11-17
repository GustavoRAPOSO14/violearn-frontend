import styles from './Post.module.css';

import {Avatar} from '@mui/material';

import PostPhoto from '../../images/postphoto.jpg';

//icons
import { FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.post_header}>
                <div className={styles.post_header_author}>
                    <Avatar>C</Avatar>
                    <strong>Stephen Curry</strong> 
                </div> 
                <div className={styles.post_header_timestamp}>
                    <span>12h</span>
                </div>
            </div>
            <div className={styles.post_text}>
                <p>Além de o melhor arremessador de todos os tempo, o pai ainda acha tempo pra tocar lol.</p>
            </div>
            <div className={styles.post_image}>
                <img src={PostPhoto} alt="" />
            </div>
            <div className={styles.post_footer}>
                <div className={styles.post_footer_icons}>
                <FaComment className={styles.post_footer_icon} />
                <FaHeart className={styles.post_footer_icon} />
                </div>
            </div>
        </div>
    )
}

export default Post;