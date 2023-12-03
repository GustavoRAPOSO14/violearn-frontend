import Sidebar from '../../components/Sidebar/Sidebar';
import Timeline from '../../components/Timeline/Timeline';
import CreateModal from '../../components/CreateModal/CreateModal'

import styles from './Home.module.css'

import { useLocation } from 'react-router-dom';

import { useContext, useEffect, useState } from 'react';

import { ModalContext } from '../../context/ModalContext';
import Profile from '../Profile/Profile';
import ProfileUpdate from '../ProfileUpdate/ProfileUpdate';
import DeleteModal from '../../components/CreateModal/DeleteModal/DeleteModal';

import { useUserValue } from '../../context/UserContext';

const Home = () => {

    const {isModalOpen, isDeleteOpen} = useContext(ModalContext);

    const location = useLocation();

    const { userInfo} = useUserValue();

    if(userInfo){
        console.log(userInfo)
    }
    

  

    return (
        <div className={styles.homepage}>
            {userInfo && (
                <>
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
                </>
            )}
            {!userInfo && <p>Carregando...</p>}
           
            
        </div>
    )
}

export default Home;