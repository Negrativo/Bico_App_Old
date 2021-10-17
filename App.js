import React, { useState, useEffect }  from 'react';
import { NavigationContainer  } from '@react-navigation/native';

import Routes from './src/routes/routes';
import { isSignedIn } from "./src/services/auth";
import AuthContext from './src/context/AuthContext';

export default function App() {
  const [isLogged, setLogged] = useState(null);
  const [signLoaded, setSignLoaded] = useState(null);

  useEffect(() => {
    isSignedIn()
        .then(res => setLogged(res))
        .then(setSignLoaded(true))
        .catch(erro => alert(erro))
  })

  if (signLoaded) 
    return (
      <AuthContext.Provider value={{isLogged}}>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </AuthContext.Provider>
    );
  else 
      return null;
}