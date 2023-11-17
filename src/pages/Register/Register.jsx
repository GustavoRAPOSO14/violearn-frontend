import styles from './Register.module.css'

import Logo from '../../images/logo_violearn-removebg-preview 1.svg';

import {NavLink} from 'react-router-dom';


//components
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className={styles.register}>
            <img src={Logo} className={styles.logo} alt="" /> 
            <h1 className={styles.title}>Cadastrar</h1>
            <form>
                <input type="text" name='name' required placeholder='Nome:'/>
                <input type="email" name='email' required placeholder='E-mail:'/>
                <input type="password" name='password' required placeholder='Senha:'/>
                <input type="password" name='confirmPassword' required placeholder='Confirme a senha:'/>
                <button className='btn'>Cadastrar</button>
            </form>
            <SocialLogin/>
            <p className={styles.back}>Retornar para o <NavLink className="link-footer" to="/login">Início</NavLink></p>

        </div>
    )
}

export default Register;