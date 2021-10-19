import React, { useState, useEffect, useContext } from 'react';

import api from '../services/api';
import { onSignOut, onSignIn, isSignedIn } from '../services/auth';

const AuthContext = React.createContext({});
 
export const AuthProvider = ({ children }) => {
    const [User, setUser] = useState(null);
    const [Token, setToken] = useState(null);
  
    useEffect(() => {
      isSignedIn()
          .catch(erro => alert(erro))
    })
  
    function Login(email, senha) {
        api.post('/login', {
            email, senha
        })
        .then(res => {
            onSignIn(res.data.token)
            .then(setUser(res.data.user))
            .then(setToken(res.data.token));
            //onSignIn(token)
        })
        .catch(error => {
            console.log(error);                      
        });
    }

    function Logout() {
        onSignOut();
    }

    return (
        <AuthContext.Provider value={{isLogged: Boolean(User), Login, Logout, User, Token}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    
    return context;
};