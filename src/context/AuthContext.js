import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';
import { onSignOut, onSignIn, isSignedIn, UserSignedIn } from '../services/auth';

const AuthContext = React.createContext({});
 
export const AuthProvider = ({ children }) => {
    const [User, setUser] = useState(null);
    const [Token, setToken] = useState(null);
    const [Logado, setUserLogado] = useState(false);

    useEffect(() => {
        isSignedIn()
            .then(res => {
                if (res === true) {
                    setUserLogado(res);
                    UserSignedIn().then(dados => {
                        setUser(dados.user);
                        setToken(dados.token);
                    })
                }
            })
            .catch(erro => alert("Erro na inicialização: ", erro))
    }, [Logado])

    //Alterar para fazer todas as mudanças no front e quando o app detectar alteração, atualizar o usuario no back
    useEffect(() => {
        if (User && Logado) {
           
        }
    })

    function Login(email, senha) {
        api.post('/login', {
            email, senha
        })
        .then(res => {
            const User = res.data.user;
            const Token = res.data.token;
            onSignIn(Token, User);
            setUser(User);
            setToken(Token);
            setUserLogado(true);
        })
        .catch(error => {
            console.log("Erro no login: ", error);                      
        });
    }

    function Logout() {
        onSignOut();
        setUserLogado(false);
        setToken(null);
        //setUser(null); TO DO - Implementar remoção do user apos logout
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