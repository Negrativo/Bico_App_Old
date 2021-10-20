import React, { useState, useEffect } from 'react';
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
    
    useEffect(() => {
        api.get('/principal/lista', {
                headers: {
                    'Authorization': `Basic ${Token}`
                }
            })
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }); 

    function apresentaDetalhes(_idSelecionado) {               
        const userSelecionado = { _id : _idSelecionado };
        console.log(Token);
        api.post(`/usuario/dadosSelecionado`, {
                headers: {
                    'Authorization': `Basic ${Token}`
                },
                body: userSelecionado
            })
            .then(response => {
                setDetalhes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        console.log(selecionado);
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
                        nome={selecionado.nome} 
                        foto={selecionado.fotoPerfil}
                        avalicao={selecionado.avaliacao}
                        empregos={selecionado.empregos}
                        descricao={selecionado.descricao}
                        telefone={selecionado.telefone} />
                }
            </SafeAreaView>    
            
        </SafeAreaView>
    );

}