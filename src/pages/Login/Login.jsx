import styles from './Login.module.css'

import Logo from '../../images/logo_violearn-removebg-preview 1.svg';

import SocialLogin from '../../components/SocialLogin/SocialLogin';

import { NavLink } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { useAuthentication } from '../../hooks/useAuthentication';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const {login , error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password
        }

        const res = await login(user);

        console.log(res);
    }

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])



    return (
        <div className={styles.login}>
            <img src={Logo} className={styles.logo} alt="violearn-logo" />
            <h1 className={styles.title}>Entre</h1>
            <form onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  name='email' 
                  required 
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                <input 
                  type="password" 
                  name='password' 
                  required  
                  placeholder='Senha'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
                {!loading && <button className='btn'>Entrar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
            <SocialLogin/>
            <p className={styles.back}>Novo usuário? <NavLink className="link-footer" to="/register">Cadastre-se</NavLink> </p>
        </div>
    )
}

export default Login;