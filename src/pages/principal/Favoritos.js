import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

import FavoritoComponent from '../../Componentes/favorito/FavoritoComponent';
import Styles from '../../Styles/StylesAbasPrincipais';
import DetalhesUsuario from '../../Componentes/detalhes/DetalhesUsuario';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const[detalhes, mostraDetalhes] = useState(false);
    const[selecionado, setDetalhes] = useState('');
    const { Token, User } = useAuth();

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    /*useEffect(() => {
        if (!!Token) {
            api.post('/favoritos/lista', { _id: User._id })
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    });*/ 

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
        <View style={Styles.container}>
            <SafeAreaView style={Styles.formNavegacao}>
                {detalhes == false &&
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
                }
                {detalhes == true &&
                    <DetalhesUsuario 
                        sair={() => mostraDetalhes(!detalhes)} 
                        UserSelecionado={selecionado} 
                        UserLogado={User}
                    />
                }
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