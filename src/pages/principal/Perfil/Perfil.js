import React, { useState,useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, FlatList} from 'react-native';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import HistoricoServico from '../../../Componentes/historico/HistoricoServicoComponent';
import HistoricoPlaceholderComponent from '../../../Componentes/historico/HistoricoPlaceholderComponent';

import styles from './StylesPerfil';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const { Token, User, Logout } = useAuth();
    const [hasErros, setHasErros] = useState(false);

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useLayoutEffect(() => {
        let mounted = true;
        if(mounted){
            if (!!Token) {
                api.post('/historico/lista', { _id: User._id })
                .then(response => {
                    if(mounted) {
                        setHasErros(false);
                        setDados(response.data);
                    }
                })
                .catch(error => {
                    console.log(error);
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

    function logoutUser() {
        Logout();
    }

    return (
        <View style={styles.container}>    
            <View style={styles.container}>
                <View style={styles.formFotoPerfil}>
                    <ImageBackground style={styles.fundoFoto}>
                        { !!User.fotoPerfil && <Image source={{ uri: User.fotoPerfil }} style={styles.fotoPerfil} /> }
                    </ImageBackground>
                </View>
                <View style={styles.formCabecalhoPerfil}>
                    <Text style={styles.textNome}>{User.nome.toUpperCase()}</Text>
                    <Text style={styles.textGeral}>Avaliação: {User.avaliacao}</Text>
                </View>
                <Text>________________________________</Text>
                <View style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.formBottons}>
                        <TouchableOpacity style={styles.buttonCadastro}>
                            <Text style={styles.textBottom}>Editar perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCadastro}>
                            <Text style={styles.textBottom}>Configurações</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity style={styles.buttonCadastro} onPress={() => logoutUser()}>
                            <Text style={styles.textBottom}>Sair</Text>
                        </TouchableOpacity>                          
                        <Text style={styles.divisoria}>________________________________</Text>
                    </View>
                    <View style={styles.formHistorico}>
                        <Text style={styles.textGeral}>Hitórico</Text>
                        { !hasErros &&
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={dadosLista}
                                keyExtractor={dadosLista => dadosLista.toString()}
                                ListEmptyComponent={HistoricoPlaceholderComponent}
                                renderItem={({item}) => (
                                    <HistoricoServico
                                        onPress={() => apresentaDetalhes(item._id)}
                                        foto={item.fotoPerfil} 
                                        nome={item.nome}
                                        data={item.data}
                                    />
                                )}
                            />
                        }
                        {
                            hasErros &&
                            <View>
                                <Text style={styles.Text}>Não encontrado histórico</Text>
                            </View>
                        }
                    </View>
                </View>                                                       
            </View>
        </View>     
    );
}
