import styles from './Router.module.css';

import Sidebar from "../../components/Sidebar/Sidebar";
import { Routes, Route, useLocation } from 'react-router-dom';



//pages
import Home from '../Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';

const Router = () => {


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
                    <Route path="/" element={<Home/>}/>
                    <Route path="/user" element={<Home/>}/>
                    <Route path='/update' element={<Home/>}/>
                </Routes>
            </div>
            )}
            {(location.pathname === "/login" || location.pathname === "/register") && (
                <div>
                    <Routes>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                    </Routes>
                </div>
            )}
            
            
        </div>
    )
}

export default Router;