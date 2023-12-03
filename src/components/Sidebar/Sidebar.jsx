import styles from './Sidebar.module.css'

import {NavLink} from 'react-router-dom'
import { useContext } from 'react';

import { ModalContext } from '../../context/ModalContext';

import { useAuthentication } from '../../hooks/useAuthentication';

import { useUserValue } from '../../context/UserContext';



//icons
import { TiHome } from "react-icons/ti";
import { FaRegSquarePlus } from "react-icons/fa6";
import { PiPlaylistBold } from "react-icons/pi";
import { RiLogoutBoxLine } from "react-icons/ri";



import userPic from "../../images/1000_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg";


const Sidebar = () => {

    const { setUserInfo, userInfo} = useUserValue();

    const { logout } = useAuthentication();

    const logoutInfo = () => {

        logout()
        setUserInfo();

    }

    const {setIsModalOpen} = useContext(ModalContext);

    const handleModalOpen = () => {
        setIsModalOpen(prev => !prev)
    }


    return (
        <aside className={styles.sidebar}>
            <header className={styles.sidebar_header}>
                <NavLink to="/user">
                {userInfo.profileImage && <img src={userInfo.profileImage} alt="" />}
                {!userInfo.profileImage && <img src={userPic} alt="" />}
                
                </NavLink>
                
            </header>
            <nav>
                <NavLink to="/">
                    <span>
                        <TiHome className="icon-e"/>
                        <span className={styles.sidebar_text}>Home</span>
                    </span>
                </NavLink>
                <NavLink onClick={handleModalOpen}>
                    <span>
                        <FaRegSquarePlus className="icon-e" />
                        <span className={styles.sidebar_text}>Novo Post</span>
                    </span>
                </NavLink>
                <NavLink>
                    <span>
                        <PiPlaylistBold className="icon-e"/>
                        <span className={styles.sidebar_text}>Playlist</span>
                    </span>
                </NavLink>
                <NavLink onClick={logoutInfo}>
                    <span>
                        <RiLogoutBoxLine className="icon-e" />
                        <span className={styles.sidebar_text}>Sair</span>
                    </span>
                </NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar;