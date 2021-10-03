import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, FlatList, TouchableOpacity, SafeAreaView} from 'react-native';

import EmpregoList from '../../Componentes/EmpregoList';
import DetalhesPrincipal from '../../Componentes/DetalhesPrincipal';
import Styles from '../../Styles/StylesAbasPrincipais';
import iconPesquisa from '../../../assets/pesquisar.png'
import api from '../../services/api';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const[detalhes, mostraDetalhes] = useState(false);
    const[detalhesSelecionado, setDetalhes] = useState('');

    useEffect(() => {
        api.get('/principal/lista', {})
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }); 

    function apresentaDetalhes(_idSelecionado) {        
        let _id = _idSelecionado;
        
        console.log(_id);
        api.get(`/usuario/dadosSelecionado/${_id}`)
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
            <View>
                {detalhes == false &&
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dadosLista}
                    keyExtractor={(item, dadosLista) => dadosLista.toString()}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                                <EmpregoList onPress={() => apresentaDetalhes(item._id)} foto={item.fotoPerfil} nome={item.nome} local="" emprego="teste"/>
                            </TouchableOpacity>          
                        )
                    }}
                />
                }
                {detalhes == true &&
                    <DetalhesPrincipal sair={() => mostraDetalhes(!detalhes)} nome={detalhesSelecionado.nome} />
                }
            </View>    
            
        </SafeAreaView>
    );

}