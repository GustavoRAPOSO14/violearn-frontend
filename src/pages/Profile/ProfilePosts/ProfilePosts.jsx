import ProfilePostCard from '../ProfilePostCard/ProfilePostCard';
import styles from './ProfilePosts.module.css'

const ProfilePosts = () => {
    return (
        <div className={styles.profiles_posts_container}>
            <ProfilePostCard/>
            <ProfilePostCard/>
            <ProfilePostCard/>
            <ProfilePostCard/>
            <ProfilePostCard/>
            <ProfilePostCard/>

        </div>
    )
}

export default ProfilePosts;