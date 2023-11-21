import './App.css';

import Router from './pages/Router/Router';

import { AuthProvider } from './context/AuthContext';

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


  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <Router/>
      </AuthProvider>
    </div>
  );
}

export default App;
