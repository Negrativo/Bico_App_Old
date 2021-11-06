import React, { useState, useLayoutEffect } from 'react';
import { View, Image, TextInput, FlatList, SafeAreaView} from 'react-native';

import iconPesquisa from '../../../../assets/pesquisar.png';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import UsuarioComponent from '../../../Componentes/usuario/UsuarioComponent';
import UsuarioPlaceholderComponent from '../../../Componentes/usuario/UsuarioPlaceholderComponent';

import styles from './StylesPrincipal';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const { Token, User } = useAuth();

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useLayoutEffect(() => {
        let mounted = true;

        if (!!Token) {
            api.get(`/principal/lista/`, {params: {_id: User._id}})
            .then(response => {
                if(mounted)
                    setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
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
        <SafeAreaView style={styles.container}>
            <View style={styles.formBarraPesquisa}>
                <TextInput
                    style={styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#000000"
                    placeholder="Pesquisar">    
                </TextInput>
                <Image source={iconPesquisa} style={styles.imagem}/>                 
            </View>
            <SafeAreaView style={styles.formNavegacaoPrincipal}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dadosLista}
                    maxToRenderPerBatch={10}
                    keyExtractor={dadosLista => dadosLista._id}
                    ListEmptyComponent={UsuarioPlaceholderComponent}
                    renderItem={({item}) => (
                        <UsuarioComponent
                            onPress={() => apresentaDetalhes(item._id)} 
                            foto={item.fotoPerfil} 
                            nome={item.nome}    
                        />
                    )}
                />
            </SafeAreaView>    
            
        </SafeAreaView>
    );

}