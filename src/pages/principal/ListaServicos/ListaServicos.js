import React, { useState, useLayoutEffect } from 'react';
import { View, Image, Text, TextInput, FlatList, SafeAreaView} from 'react-native';

import iconPesquisa from '../../../../assets/pesquisar.png';
import { empregos } from '../../../data/empregos';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import CategoriasEmpregosComponent from '../../../Componentes/categoriasEmpregos/categoriasEmpregosComponent';
import CategoriasEmpregosPlaceholder from '../../../Componentes/categoriasEmpregos/categoriasEmpregosPlaceholderComponent';

import styles from './StylesListaServicos';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function({ route, navigation }) {
    const[dadosLista, setDados] = useState('');
    const { Token, User } = useAuth();
    const ListaServicos = route.params.servicosCategoria;

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textoCategorias}>Serviços da categoria selecionada</Text>
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
                    data={ListaServicos}
                    keyExtractor={dadosLista => dadosLista}
                    ListEmptyComponent={CategoriasEmpregosPlaceholder}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => {}} style={styles.containerListaServicos}>
                            <View style={styles.contornoDadosLista}>
                                <Text style={styles.Text}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>    
            
        </SafeAreaView>
    );

}