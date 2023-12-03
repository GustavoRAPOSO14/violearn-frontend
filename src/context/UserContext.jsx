import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children, value}){

    const [userInfo, setUserInfo] =  useState();


    return <UserContext.Provider value={{userInfo, setUserInfo}}>
        {children}
    </UserContext.Provider>
}

export function useUserValue(){
    return useContext(UserContext);
}