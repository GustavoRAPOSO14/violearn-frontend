import Sidebar from '../../components/Sidebar/Sidebar';
import Timeline from '../../components/Timeline/Timeline';
import CreateModal from '../../components/CreateModal/CreateModal'

import styles from './Home.module.css'

import { useLocation } from 'react-router-dom';

import { useContext } from 'react';

import { ModalContext } from '../../context/ModalContext';
import Profile from '../Profile/Profile';
import ProfileUpdate from '../ProfileUpdate/ProfileUpdate';
import DeleteModal from '../../components/CreateModal/DeleteModal/DeleteModal';

const Home = () => {
    
    const {isModalOpen, isDeleteOpen} = useContext(ModalContext);

    const location = useLocation();

    return (
        <div className={styles.homepage}>
            <div className={styles.homepage_nav}>
                <Sidebar/>
            </div>
            <div className={styles.homepage_timeline}>
                {location.pathname === "/" &&(
                    <Timeline/>
                )}
                {location.pathname === "/user" &&(
                    <Profile/>
                )}
                {location.pathname === "/update" && (
                    <ProfileUpdate/>
                )}
            </div>
            {isModalOpen && <CreateModal/>}
            {isDeleteOpen && <DeleteModal/>}
        </div>
    )
}

export default Home;