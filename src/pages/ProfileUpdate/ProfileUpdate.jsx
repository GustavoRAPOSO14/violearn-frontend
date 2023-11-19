import styles from './ProfileUpdate.module.css';
import {Avatar} from '@mui/material';
import userPic from "../../images/calvo.png";

import { useState } from 'react';



const ProfileUpdate = () => {

    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];

        if (imageFile){
            const leitor = new FileReader();

            leitor.onloadend = () => {
                setImage(leitor.result);
            }
            leitor.readAsDataURL(imageFile)
        }

    }
    


    return (
        <div className={styles.update_container}>
            <h2>Atualize o perfil</h2>
            <form>
                <div className={styles.update_info}>
                {image ? (
                    <Avatar className={styles.avatar} src={image} sx={{ width: 60, height: 60 }}></Avatar>
                ) : (
                    <Avatar className={styles.avatar} src={userPic} sx={{ width: 60, height: 60 }}></Avatar>
                )}
                <div className={styles.update_photo}>
                    <p>RogerGuedes_</p>
                    <label>
                        <input type="file" accept='image/*'
                        onChange={handleImageChange}/>
                        <p>Mudar foto do perfil</p>
                    </label>
                </div>
                </div>
                <div className={styles.update_name}>
                <label>
                    <span>Nome: </span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                </div>
                {image || name ? (
                    <button className={styles.btn_update}>Atualizar</button>
                ) : (
                    <button className={styles.btn_update} disabled>Atualizar</button>
                )}

                   
            </form>
        </div>
    )
}

export default ProfileUpdate;