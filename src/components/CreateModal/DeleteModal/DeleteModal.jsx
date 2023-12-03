import styles from './DeleteModal.module.css';

import { useContext } from 'react';
import {ModalContext} from '../../../context/ModalContext';

import { useAuthValue } from '../../../context/AuthContext';
import { useAuthentication } from '../../../hooks/useAuthentication';

const DeleteModal = () => {

    const {setDeleteOpen} = useContext(ModalContext);

    const { deleteUser} = useAuthentication();
    const {user} = useAuthValue();

    const handleDelete = () => {

        deleteUser(user);
        setDeleteOpen(false);

    }





    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal_body}>
                <div className={styles.modal_header}>
                <p>Deseja excluir o perfil?</p>
                </div>
                <div className={styles.option} >
                    <button className={styles.delete} onClick={handleDelete} >Remover Perfil</button>
                </div>
                <div className={styles.option} >
                    <button onClick={() => setDeleteOpen(false)}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;