import styles from './ProfileUpdate.module.css';
import {Avatar} from '@mui/material';
import userPic from "../../images/calvo.png";

import { useState } from 'react';

import { useUserValue } from '../../context/UserContext';

import { useAuthentication } from '../../hooks/useAuthentication';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';


const ProfileUpdate = () => {

    const { update } = useAuthentication();
    
    const {userInfo} = useUserValue();
    
    const [image, setImage] = useState("");
    const [progress, setProgress] = useState(0);
    const [name, setName] = useState("");

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     setImage(file);
    // }

    
    
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

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const file = e.target[0]?.files[0]
        if (!file) return;

        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)
            },
            error => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    console.log(url)
                    setImage(url)

                    const updateInfo = async () => {
                        const updatedUser = {
                            name,
                            url
                        }
                        if (updatedUser.name === ""){
                            updatedUser.name = userInfo.name
                        }

                        const res = await update(userInfo, updatedUser)
                        console.log(res)
                    }

                    updateInfo();

                    window.location.reload();

                   

                



                })
            }
        )

    }


    

    return (
        <div className={styles.update_container}>
            <h2>Atualize o perfil</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.update_info}>
                {image ? (
                    <Avatar className={styles.avatar} src={image} sx={{ width: 60, height: 60 }}></Avatar>
                ) : (
                    <Avatar className={styles.avatar} src={userInfo.profileImage}  sx={{ width: 60, height: 60 }}></Avatar>
                )}
                {/* <Avatar className={styles.avatar} src={userInfo.profileImage} sx={{ width: 60, height: 60 }}></Avatar> */}
                <img alt="" />
                <div className={styles.update_photo}>
                    <p>{userInfo.name}</p>
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