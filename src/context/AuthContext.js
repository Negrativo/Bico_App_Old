import React, { useState, useEffect, useContext } from 'react';

import api from '../services/api';
import { onSignOut, onSignIn, isSignedIn } from '../services/auth';
import storage from '../services/storage';

const AuthContext = React.createContext({});
 
export const AuthProvider = ({ children }) => {
    const [User, setUser] = useState(null);
    const [Token, setToken] = useState(null);
    const [Logado, setUserLogado] = useState(false);

    useEffect(() => {
      isSignedIn()
        .then(res => setUserLogado(res))
        .catch(erro => alert(erro))
    })
  
    function Login(email, senha) {
        api.post('/login', {
            email, senha
        })
        .then(res => {
            storage.setItem("TOKEN_KEY", JSON.stringify(res.data.token));
            storage.setItem("USER", JSON.stringify(res.data.user));
            setUser(res.data.user);
            setToken(res.data.token);
        })
        .catch(error => {
            console.log(error);                      
        });
    }

    function Logout() {
        onSignOut()
            .then(setUserLogado(false));
    }

    return (
        <AuthContext.Provider value={{Logado, Login, Logout, User, Token}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    
    return context;
};