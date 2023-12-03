import styles from './Post.module.css';

import {Avatar} from '@mui/material';

import PostPhoto from '../../images/postphoto.jpg';

//icons
import { FaHeart } from "react-icons/fa";

const Post = ({nome, text, image}) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_header}>
                <div className={styles.post_header_author}>
                    <Avatar></Avatar>
                    <strong>{nome}</strong> 
                </div> 
                <div className={styles.post_header_timestamp}>
                    <span>12h</span>
                </div>
            </div>
            <div className={styles.post_text}>
                <p>{text}</p>
            </div>
            <div className={styles.post_image}>
                <img src={image} alt="" />
            </div>
            <div className={styles.post_footer}>
                <div className={styles.post_footer_icons}>
                <FaHeart className={styles.post_footer_icon} />
                </div>
            </div>
        </div>
    )
}

export default Post;