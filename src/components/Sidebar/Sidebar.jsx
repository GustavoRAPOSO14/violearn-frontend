import styles from './Sidebar.module.css'

import {NavLink} from 'react-router-dom'
import { useContext } from 'react';

import { ModalContext } from '../../context/ModalContext';

//icons
import { TiHome } from "react-icons/ti";
import { FaRegSquarePlus } from "react-icons/fa6";
import { PiPlaylistBold } from "react-icons/pi";
import { RiLogoutBoxLine } from "react-icons/ri";




import userPic from "../../images/calvo.png";

const Sidebar = () => {

    const {setIsModalOpen} = useContext(ModalContext);

    const handleModalOpen = () => {
        setIsModalOpen(prev => !prev)
    }

    return (
        <aside className={styles.sidebar}>
            <header className={styles.sidebar_header}>
                <NavLink to="/user">
                    <img src={userPic} alt="user-pic" />
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
                <NavLink>
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