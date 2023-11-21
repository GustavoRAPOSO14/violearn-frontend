import styles from './Register.module.css'

import Logo from '../../images/logo_violearn-removebg-preview 1.svg';


import {NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';


//components
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const {createUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword){
            setError("As senhas precisam ser iguais!")
            return;
        }

        const res = await createUser(user);

        console.log(res);
    }

    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])


    return (
        <div className={styles.register}>
            <img src={Logo} className={styles.logo} alt="" /> 
            <h1 className={styles.title}>Cadastrar</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="email" 
                name='email' 
                required 
                placeholder='E-mail:'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="text" 
                name='displayName' 
                required 
                placeholder='Nome completo:'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                />
                <input 
                type="text" 
                name='username' 
                required 
                placeholder='Nome do usuário:'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                />
                <input 
                type="password" 
                name='password' 
                required 
                placeholder='Senha:'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                type="password" 
                name='confirmPassword' 
                required 
                placeholder='Confirme a senha:'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {!loading && <button className='btn'>Cadastrar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
            <SocialLogin/>
            <p className={styles.back}>Retornar para o <NavLink className="link-footer" to="/login">Início</NavLink></p>

        </div>
    )
}

export default Register;