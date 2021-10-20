import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            //.then(res => setUserLogado(res)) TO DO - Implementar remoção do user apos logout
            .catch(erro => alert(erro))
    })

    function Login(email, senha) {
        api.post('/login', {
            email, senha
        })
        .then(res => {
            const user = res.data.user;
            const token = res.data.token;
            onSignIn(token, user);
            setUser(res.data.user);
            setToken(res.data.token);
            setUserLogado(true);
            console.log(User, Token);
        })
        .catch(error => {
            console.log(error);                      
        });
    }

    function Logout() {
        onSignOut();
        setUserLogado(false);
        setToken(null);
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