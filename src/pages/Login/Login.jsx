import styles from './Login.module.css'

import Logo from '../../images/logo_violearn-removebg-preview 1.svg';

import SocialLogin from '../../components/SocialLogin/SocialLogin';

import { NavLink } from 'react-router-dom';


const Login = () => {
    return (
        <div className={styles.login}>
            <img src={Logo} className={styles.logo} alt="violearn-logo" />
            <h1 className={styles.title}>Entre</h1>
            <form>
                <input 
                  type="email" 
                  name='email' 
                  required 
                  placeholder='E-mail' />
                <input 
                  type="password" 
                  name='password' 
                  required  
                  placeholder='Senha'/>
                <button className='btn'>Entrar</button>
            </form>
            <SocialLogin/>
            <p className={styles.back}>Novo usuário? <NavLink className="link-footer" to="/register">Cadastre-se</NavLink> </p>
        </div>
    )
}

export default Login;