import React, { useState } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';

import FavoritoComponent from '../../Componentes/favorito/FavoritoComponent';
import Styles from '../../Styles/StylesAbasPrincipais';

export default function({ navigation }) {
    return(
        <View style={Styles.container}>
            <ScrollView style={Styles.scrollView}>
                    <FavoritoComponent nome="Lucas Souza" local="Londrina" emprego="Restaurante"/>
                    <FavoritoComponent nome="Jose da Silva" local="Ibiporã" emprego="Loja"/>
                    <FavoritoComponent nome="Rafael Siqueira" local="Londrina" emprego="Marmoraria"/>
                    <FavoritoComponent nome="Marcela Duarte" local="Cambe" emprego="Faxineira"/>
                    <FavoritoComponent nome="Felipe Ramos" local="Cambe" emprego="Barbearia"/>
                    <FavoritoComponent nome="Barbara Menezes" local="Londrina" emprego="Baba"/>
            </ScrollView>
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