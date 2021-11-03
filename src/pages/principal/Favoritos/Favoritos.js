import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, FlatList, Text} from 'react-native';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import FavoritoComponent from '../../../Componentes/favorito/FavoritoComponent';
import FavoritoPlaceholderComponent from '../../../Componentes/favorito/FavoritoPlaceholderComponent';

import styles from './StylesFavorito';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const { Token, User } = useAuth();
    const [hasErros, setHasErros] = useState(false);

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useEffect(() => {
        let mounted = true;
        if(mounted){
            if (!!Token) {
                api.post('/favoritos/lista', { _id: User._id })
                .then(response => {
                    if(mounted) {
                        setHasErros(false);
                        setDados(response.data);
                    }
                })
                .catch(error => {
                    if(mounted)
                        setHasErros(true);
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
        <View style={styles.container}>
            <SafeAreaView style={styles.formNavegacaoFavoritos}>
            { !hasErros &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dadosLista}
                    keyExtractor={dadosLista => dadosLista.toString()}
                    ListEmptyComponent={FavoritoPlaceholderComponent}
                    renderItem={({item}) => (
                        <FavoritoComponent 
                        onPress={() => apresentaDetalhes(item._id)}  
                        foto={item.fotoPerfil} 
                        nome={item.nome} 
                        />
                    )}
                />
            }
            {
                hasErros &&
                <View>
                    <Text style={styles.Text}>Não encontrado favoritos.</Text>
                </View>
            }
            </SafeAreaView>   
        </View> 
    );

}
