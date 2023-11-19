import styles from './ProfileDetails.module.css';

import userPic from "../../../images/calvo.png";

import {NavLink} from 'react-router-dom';
import { useContext } from 'react';

import { ModalContext } from '../../../context/ModalContext';


const ProfileDetails = () => {

    const { setDeleteOpen} = useContext(ModalContext);

    const handleModal = () => {
        setDeleteOpen(prev => !prev)
    }


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
                        <span><strong>Roger Krug Guedes</strong></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileDetails;