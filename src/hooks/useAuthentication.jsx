import { app } from '../firebase/config';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth';

import { useState, useEffect } from 'react';



export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    



    //cleanup - memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }

    //register
    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
                data.displayName,
                data.userName,
                data.profileImage
            )

            let payload = {
	            "userId": user.uid,
	            "userName": data.userName,
	            "name": data.displayName,
	            "profileImage": ""
            }

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stringify(payload)
            }

            fetch("https://okay-hour-production.up.railway.app/users", requestOptions)
            .then(response => response.json())
            .then(data => {

            })
            .catch(error => {

            })


            await updateProfile(user, {
                displayName: data.displayName,
            })

            setLoading(false);
            return user;

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres";
            }else if (error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado"
            }else{
                systemErrorMessage = "Ocorreu um erro. Tente mais tarde."
            }

            setLoading(false);
            setError(systemErrorMessage);

        }

    }

    //logout - signout
    const logout = () => {
        checkIfIsCancelled();

        signOut(auth)

    }

    //login - signin
    const login = async (data) => {
        checkIfIsCancelled();

        setLoading(true)
        setError(false)

        try {

            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
            
        } catch (error) {
            
            console.log(error.message)
            console.log(typeof error.message)
            
            let systemErrorMessage

            if (error.message.includes("invalid-login")){
                systemErrorMessage = "Usuário ou senha inválidos";
            }else{
                systemErrorMessage = "Ocorreu um erro. Tente mais tarde."
            }

            setError(systemErrorMessage)
            setLoading(false);
        }

    }


    //delete user
    const deleteUser = (user) => {
        if (user){
            user.delete();
        }

        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-type": 'application/json'
            }
        }

        fetch(`https://okay-hour-production.up.railway.app/users/${user.uid}`, requestOptions)
        .then(response => response.json())
        .catch(error => {

        })

    }

    //update
    const update = async (data, newData) => {
        checkIfIsCancelled();

        setLoading(true)
        setError(null)

        
        try {

            let payload = {
                "userId": data.userId,
                "userName": data.userName,
                "name": newData.name,
                "profileImage": newData.url
            }
    
            const requestOptions = {
                method: "PUT",
                headers: {
                    "Content-type": 'application/json'
                },
                body: JSON.stringify(payload)
            }
    
            fetch(`https://okay-hour-production.up.railway.app/users/${data.userId}`, requestOptions)
            .then(response => response.json())
            .then(data => {
    
            })

           
            
        } catch (error) {
            
            console.log(error.message)
            console.log(typeof error.message)
        }

    }




    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
        deleteUser,
        update,
    }

}