import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Image, TextInput, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';

import UsuarioComponent from '../../Componentes/usuario/UsuarioComponent';
import DetalhesUsuario from '../../Componentes/detalhes/DetalhesUsuario';
import Styles from '../../Styles/StylesAbasPrincipais';
import iconPesquisa from '../../../assets/pesquisar.png';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const[detalhes, mostraDetalhes] = useState(false);
    const[selecionado, setDetalhes] = useState('');
    const { Token, User } = useAuth();

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useLayoutEffect(() => {
        if (!!Token) {
            api.get('/principal/lista')
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    }); 

    function apresentaDetalhes(_idSelecionado) {               
        api.post(`/usuario/dadosSelecionado`, { _id : _idSelecionado })
            .then(response => {
                setDetalhes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        mostraDetalhes(!detalhes);
    }

    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.formBarraPesquisa}>
                <TextInput 
                    style={Styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#D9DBDC"
                    placeholder="Pesquisar">    
                </TextInput> 
                <Image source={iconPesquisa} style={Styles.imagem}/>                 
            </View>
            <SafeAreaView style={Styles.formNavegacao}>
                {detalhes == false &&
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
                }
                {detalhes == true &&
                    <DetalhesUsuario 
                        sair={() => mostraDetalhes(!detalhes)} 
                        UserSelecionado={selecionado} 
                        UserLogado={User}/>
                }
            </SafeAreaView>    
            
        </SafeAreaView>
    );

}