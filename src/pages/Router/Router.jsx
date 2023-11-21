import styles from './Router.module.css';

import Sidebar from "../../components/Sidebar/Sidebar";
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';

//pages
import Home from '../Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';

const Router = () => {

    const { user } = useAuthValue();

    const location = useLocation();

    return (
        <div>
            {(location.pathname !== "/login" && location.pathname !== "/register") && (
            // <div className={styles.cont}>
            // <div className={styles.side}>
            //     <Sidebar/>
            // </div>
            // <div className={styles.feed}>
            //     <Home/>
            // </div>
            // </div>
            <div>
                <Routes>
                    <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
                    <Route path="/user" element={user ? <Home/> : <Navigate to="/login"/>}/>
                    <Route path='/update' element={user ? <Home/> : <Navigate to="/login"/>}/>
                </Routes>
            </div>
            )}
            {(location.pathname === "/login" || location.pathname === "/register") && (
                <div>
                    <Routes>
                        <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
                        <Route path='/register' element={!user ? <Register/> : <Navigate to="/"/>}/>
                    </Routes>
                </div>
            )}
            
            
        </div>
    )
}

export default Router;