import './App.css';

import Router from './pages/Router/Router';

import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

import { onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';



function App() {

  const [user, setUser] = useState(undefined);


  const {auth} = useAuthentication();

  const loadingUser = user === undefined;


  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
        setUser(user);
        
    })

  }, [auth])

  // useEffect(() => {
  //   const verificar = setInterval(() => {
  //     if (user.uid !== undefined){
  //       FetchData();
  //       clearInterval(verificar)
  //     }
  //   }, 200)

  //   return () => {
  //     clearInterval(verificar)
  //   }


  // }, [user])


  // const FetchData = async () => {
  //   if (user){
  //     const res = await fetch(`http://localhost:8080/users/${user.uid}`)
  //     const data = await res.json()
  //     setTeste(data);
  //   }
  //   }
  


  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
        <AuthProvider value={{user}}>
      <UserProvider>
            <Router/>
      </UserProvider>
        </AuthProvider>
    </div>
  );
  
}

export default App;
