import styles from './CreateModal.module.css';

import { LuFileImage } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";


import { useState, useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

const CreateModal = () => {

    const {setIsModalOpen} = useContext(ModalContext);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {

        const file = e.target.files[0];

        if(file){
            setSelectedFile(file.name)
        }else{
            setSelectedFile(null)
        }
    }



    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_body}>
                <div className={styles.modal_header}>
                    <h2 style={{color: "#1E265D"}}>Novo Post</h2>
                    <IoIosCloseCircleOutline className={styles.close_icon}
                    onClick={() => setIsModalOpen(false)}/>
                </div>
                <form className={styles.input_container}>
                    <textarea name="caption" placeholder='Digite aqui o que esta pensando'></textarea>
                    <div className={styles.file_image}>
                    <input 
                        type="file" 
                        accept='image/*'  
                        id='file'
                        onChange={handleFileChange}/>
                    <label htmlFor='file'><LuFileImage className={styles.image_icon} />{selectedFile || "Selecione uma imagem"}</label>
                    </div>
                    <button className="btn">Enviar</button>
                    </form>      
            </div>
        </div>
    )
}

export default CreateModal;