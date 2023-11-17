import styles from './SocialLogin.module.css'


import logoGoogle from '../../images/Google-logo.svg'
import logoFace from '../../images/logo-facebook.svg'
import logotwitter from '../../images/logo-twitter.svg'

const SocialLogin = () => {
    return (
        <div>
            <div className={styles.linha_container}>
                <div className={styles.horizontal}></div>
                <div className={styles.linha_texto}>
                    <p> Ou continue com   </p>
                </div>
                    <div className={styles.horizontal}></div>
            </div>
            <div className={styles.socials}>
                <div className={styles.social_item}><img src={logoGoogle} alt=""/></div>
                <div className={styles.social_item}><img src={logoFace} alt=""/></div>
                <div className={styles.social_item}><img src={logotwitter} alt=""/></div>
            </div>
        </div>
    )
}

export default SocialLogin;