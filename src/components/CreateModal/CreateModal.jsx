import styles from './CreateModal.module.css';

import { LuFileImage } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";


import { useState, useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

import { storage } from '../../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { useUserValue } from '../../context/UserContext';

const CreateModal = () => {

    const {setIsModalOpen} = useContext(ModalContext);

    const {userInfo} = useUserValue();

    const [selectedFile, setSelectedFile] = useState(null);
    const [image, setImage] = useState("")
    const [text, setText] = useState("");
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {

        const imageFile = e.target.files[0];

        if(imageFile){
            setSelectedFile(imageFile.name)
        }else{
            setSelectedFile(null)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        
        let file = e.target[0]?.files[0]
        if (!file) return;

        const storageRef = ref(storage, `posts/${file.name}`)
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

                    let payload = {
                        "text": text,
	                    "postId": Math.floor(Math.random()*100000),
	                    "userId": userInfo.userId,
	                    "postPath": url,
	                    "likeCount": 0
                    }

                    const requestOptions = {
                        method: "POST",
                        headers: {
                            "Content-Type": 'application/json'
                        },
                        body: JSON.stringify(payload),
                    }
                    
                    fetch("http://localhost:8080/post", requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                    })
                    .catch(error => {

                    })

                    window.location.reload();
                    setLoading(false)

                })
            }
        )

    }



    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_body}>
                <div className={styles.modal_header}>
                    <h2 style={{color: "#1E265D"}}>Novo Post</h2>
                    <IoIosCloseCircleOutline className={styles.close_icon}
                    onClick={() => setIsModalOpen(false)}/>
                </div>
                <form className={styles.input_container} onSubmit={handleSubmit}>
                    <div className={styles.file_image}>
                    <input 
                        type="file" 
                        accept='image/*'  
                        id='file'
                        onChange={handleFileChange}/>
                    <label htmlFor='file'><LuFileImage className={styles.image_icon} />{selectedFile || "Selecione uma imagem"}</label>
                    </div>
                    <textarea name="caption" placeholder='Digite aqui o que esta pensando'
                    onChange={(e) => setText(e.target.value)}></textarea>
                    {loading && <button className="btn" disabled>Aguarde...</button> }
                    {!loading && <button className="btn">Enviar</button>}
                    </form>      
            </div>
        </div>
    )
}

export default CreateModal;