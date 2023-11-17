import Sidebar from '../../components/Sidebar/Sidebar';
import Timeline from '../../components/Timeline/Timeline';
import CreateModal from '../../components/CreateModal/CreateModal'

import styles from './Home.module.css'

import { useLocation } from 'react-router-dom';

import { useState, useContext } from 'react';

import { ModalContext } from '../../context/ModalContext';
import Profile from '../Profile/Profile';

const Home = () => {
    
    const {isModalOpen} = useContext(ModalContext);

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
            </div>
            {isModalOpen && <CreateModal/>}
        </div>
    )
}

export default Home;