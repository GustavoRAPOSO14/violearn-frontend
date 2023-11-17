import styles from './ProfileDetails.module.css';

import userPic from "../../../images/calvo.png";


const ProfileDetails = () => {
    return (
        <div className={styles.details_container}>
            <div>
                <div className={styles.profile_pic}>
                    <img src={userPic} alt="" />
                </div>
            </div>
            <div>
                <div className={styles.details_info}>
                    <p>RogerGuedes_</p>
                    <button>Edit profile</button>
                </div>
                <div className={styles.details_info_posts}>
                    <div>
                        <span>10</span>
                        <span>posts</span>
                    </div>
                    <div>
                        <span><strong>Roger Krug Guedes</strong></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileDetails;