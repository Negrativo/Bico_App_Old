import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text} from 'react-native';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import FavoritoComponent from '../../../Componentes/favorito/FavoritoComponent';
import FavoritoPlaceholderComponent from '../../../Componentes/favorito/FavoritoPlaceholderComponent';

import styles from './StylesFavorito';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const { Token, User, permitido } = useAuth();
    const [OnLoad, setOnLoad] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useEffect(() => {
        let mounted = true;
        if(mounted && permitido){
            getDadosLista();
        }
        return () => mounted = false;
    });

    async function getDadosLista() {
        await api.post('/favoritos/lista', { favoritosIds: User.favoritosIds })
                .then(response => {
                    setDados(response.data);
                    setOnLoad(false);
                    setRefreshing(false);
                })
                .catch(error => {
                    setDados([]);
                    setRefreshing(false);
                    setOnLoad(false);
                });
    }

    function refreshList() {
        setRefreshing(true);
        getDadosLista();
    }

    function apresentaDetalhes(_idSelecionado) {
        api.post(`/usuario/dadosSelecionado`, { _id : _idSelecionado })
            .then(response => {
                navigation.navigate('Detalhes', { DadosSelecionado: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    function listaVazia() {
        return (
            <View style={styles.formListaVazia}>
                <Text style={styles.Text}>Não encontrado favoritos</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.formNavegacaoFavoritos}>
            { !OnLoad &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dadosLista}
                    keyExtractor={dadosLista => dadosLista.toString()}
                    ListEmptyComponent={listaVazia}
                    onRefresh={() => refreshList()}
                    refreshing={refreshing}
                    renderItem={({item}) => (
                        <FavoritoComponent 
                        onPress={() => apresentaDetalhes(item._id)}
                        foto={item.fotoPerfil} 
                        nome={item.nome} 
                        />
                    )}
                />
            }
            { OnLoad && <FavoritoPlaceholderComponent/> }
            </SafeAreaView>   
        </View> 
    );

}
