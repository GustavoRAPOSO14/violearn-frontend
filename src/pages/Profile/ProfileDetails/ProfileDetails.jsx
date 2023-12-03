import styles from './ProfileDetails.module.css';

import userPic from "../../../images/1000_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg";

import {NavLink} from 'react-router-dom';
import { useContext } from 'react';

import { ModalContext } from '../../../context/ModalContext';

import { useUserValue } from '../../../context/UserContext';


const ProfileDetails = () => {

    const { userInfo} = useUserValue();

    const { setDeleteOpen} = useContext(ModalContext);

    const handleModal = () => {
        setDeleteOpen(prev => !prev)
    }


    return (
        <div className={styles.details_container}>
            <div>
                <div className={styles.profile_pic}>
                    {userInfo.profileImage === "" && <img src={userPic} alt="" />}
                    {userInfo.profileImage !== "" && <img src={userInfo.profileImage} alt="" />}
                </div>
            </div>
            <div>
                <div className={styles.details_info}>
                    <p>{userInfo.userName}</p>
                    <NavLink to="/update">
                        <button>Edit profile</button>
                    </NavLink>
                    <button onClick={handleModal}>Excluir perfil</button>
                </div>
                <div className={styles.details_info_posts}>
                    <div>
                        <span>10</span>
                        <span>posts</span>
                    </div>
                    <div>
                        <span><strong>{userInfo.name}</strong></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileDetails;