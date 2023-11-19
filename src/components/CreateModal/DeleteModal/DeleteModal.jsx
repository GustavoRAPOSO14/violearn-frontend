import styles from './DeleteModal.module.css';

import { useContext } from 'react';
import {ModalContext} from '../../../context/ModalContext';

const DeleteModal = () => {

    const {setDeleteOpen} = useContext(ModalContext);

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_body}>
                <div className={styles.modal_header}>
                <p>Deseja excluir o perfil?</p>
                </div>
                <div className={styles.option} >
                    <button className={styles.delete}>Remover Perfil</button>
                </div>
                <div className={styles.option} >
                    <button onClick={() => setDeleteOpen(false)}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;