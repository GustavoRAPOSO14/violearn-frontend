import styles from './Profile.module.css'
import ProfileDetails from './ProfileDetails/ProfileDetails';
import ProfilePosts from './ProfilePosts/ProfilePosts';

const Profile = () => {
    return (
        <div className={styles.user_container}>
            <div className={styles.user_header}>
                <ProfileDetails/>
            </div>
            <div className={styles.user_body}>
                <ProfilePosts/>
            </div>
        </div>
    )
}

export default Profile;