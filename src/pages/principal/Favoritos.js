import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

import FavoritoComponent from '../../Componentes/favorito/FavoritoComponent';
import Styles from '../../Styles/StylesAbasPrincipais';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const { Token, User } = useAuth();

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useEffect(() => {
        let mounted = true;
        if(mounted){
            if (!!Token) {
                api.post('/favoritos/lista', { _id: User._id })
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
        <View style={Styles.container}>
            <SafeAreaView style={Styles.formNavegacao}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dadosLista}
                    keyExtractor={(item, dadosLista) => dadosLista.toString()}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                                <FavoritoComponent 
                                    onPress={() => apresentaDetalhes(item._id)}  
                                    foto={item.fotoPerfil} 
                                    nome={item.nome} 
                                />
                            </TouchableOpacity>          
                        )
                    }}
                />
            </SafeAreaView>   
        </View> 
    );

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Text: {
        fontSize: 30
    }

});