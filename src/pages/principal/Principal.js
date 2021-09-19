import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput, FlatList} from 'react-native';

import EmpregoList from '../../Componentes/EmpregoList';
import Styles from '../../Styles/StylesAbasPrincipais';
import iconPesquisa from '../../../assets/pesquisar.png'
import api from '../../services/api';

export default function({ navigation }) {
    const[Dados, setDados] = useState('')

    useEffect(() => {
        api.get('/principal/lista', {})
            .then(response => {
                setDados(response.data);
                //console.log(Dados);
            })
            .catch(error => {
                console.log(error);
            });
    }); 
    
    return(
        <View style={Styles.container}>

            <View style={Styles.formBarraPesquisa}>
                <TextInput 
                    style={Styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#D9DBDC"
                    placeholder="Pesquisar">    
                </TextInput> 
                <Image source={iconPesquisa} style={Styles.imagem}/>                 
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={Dados}
                keyExtractor={(item, Dados) => Dados.toString()}
                renderItem={({item}) => {
                    return (
                        <EmpregoList nome={item.nome} local="" emprego="teste"/>
                    )
                }}
            />
        </View>
    );

}