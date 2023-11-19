import styles from './ProfilePostCard.module.css'

import Photo from '../../../images/postphoto.jpg';

import { FaHeart } from "react-icons/fa";





const ProfilePostCard = () => {
    return (
        <div className={styles.post_card}>
            <img src={Photo} alt="" />
            <div className={styles.post_overlay}>
                <div className={styles.overlay_text}>
                    <div>
                    <FaHeart /> <span> 10</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfilePostCard;