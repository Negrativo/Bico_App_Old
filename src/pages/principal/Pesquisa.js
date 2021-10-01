import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, FlatList } from 'react-native';

import iconPesquisa from '../../../assets/pesquisar.png';
import Styles from '../../Styles/StylesAbasPrincipais';
import api from '../../services/api';
import OpcoesComponets from '../../Componentes/pesquisaOpcoes';

export default function({ navigation }) {
    const[Dados, setDados] = useState('')

    useEffect(() => {
        api.get('/pesquisa/cargos', {})
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });    

    return(
        <View style={Styles.containerPesquisa}>
            <View style={Styles.formBarraPesquisa}>
                <TextInput 
                    style={Styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#D9DBDC"
                    placeholder="Pesquisar">    
                </TextInput> 
                <Image source={iconPesquisa} style={Styles.imagem}/>                 
            </View>

            <View style={Styles.formGrupoRecomendacao}>
                <FlatList
                    horizontal={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={Dados}
                    keyExtractor={(item, Dados) => Dados.toString()}
                    renderItem={({item}) => {
                        return (
                            <OpcoesComponets cargo={item.nome}/>
                        )
                    }}
                />
            </View>
        </View>
    );

}