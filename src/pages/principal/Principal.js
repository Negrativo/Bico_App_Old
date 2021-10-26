import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Image, TextInput, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';

import UsuarioComponent from '../../Componentes/usuario/UsuarioComponent';
import Styles from '../../Styles/StylesAbasPrincipais';
import iconPesquisa from '../../../assets/pesquisar.png';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const { Token, User } = useAuth();

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useLayoutEffect(() => {
        let mounted = true;
        if(mounted){
            if (!!Token) {
                api.get('/principal/lista')
                .then(response => {
                    setDados(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
        return () => mounted = false;
    }); 

    function apresentaDetalhes(_idSelecionado) {               
        api.post(`/usuario/dadosSelecionado`, { _id : _idSelecionado })
            .then(response => {
                navigation.navigate('Detalhes', { DadosSelecionado: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.formBarraPesquisa}>
                <TextInput 
                    style={Styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#000000"
                    placeholder="Pesquisar">    
                </TextInput> 
                <Image source={iconPesquisa} style={Styles.imagem}/>                 
            </View>
            <SafeAreaView style={Styles.formNavegacao}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dadosLista}
                    keyExtractor={(item, dadosLista) => dadosLista.toString()}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                                <UsuarioComponent 
                                    onPress={() => apresentaDetalhes(item._id)} 
                                    foto={item.fotoPerfil} 
                                    nome={item.nome}    
                                />
                            </TouchableOpacity>          
                        )
                    }}
                />
            </SafeAreaView>    
            
        </SafeAreaView>
    );

}