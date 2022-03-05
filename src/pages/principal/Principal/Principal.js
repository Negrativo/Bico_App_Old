import React, { useState, useLayoutEffect } from 'react';
import { View, Image, Text, TextInput, FlatList, SafeAreaView} from 'react-native';

import iconPesquisa from '../../../../assets/pesquisar.png';
import { empregos } from '../../../data/empregos';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import CategoriasEmpregosComponent from '../../../Componentes/categoriasEmpregos/categoriasEmpregosComponent';
import CategoriasEmpregosPlaceholder from '../../../Componentes/categoriasEmpregos/categoriasEmpregosPlaceholderComponent';

import styles from './StylesPrincipal';

export default function({ navigation }) {
    const { Token } = useAuth();

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useLayoutEffect(() => {
        let mounted = true;
        return () => mounted = false;
    });

    function acessaServicos(servicosCategoria) {               
        navigation.navigate('Lista Serviços', { servicosCategoria });
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
            
            <Text style={styles.textoCategorias}>Categorias</Text>
            
            <SafeAreaView style={styles.formNavegacaoPrincipal}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={empregos}
                    keyExtractor={dadosLista => dadosLista._id}
                    maxToRenderPerBatch={10}
                    ListEmptyComponent={CategoriasEmpregosPlaceholder}
                    renderItem={({item}) => (
                        <CategoriasEmpregosComponent
                            onPress={() => acessaServicos(item.Servicos)}
                            nome={item.nome}
                            foto={item.imagem}
                        />
                    )}
                />
            </SafeAreaView>    
            
        </SafeAreaView>
    );

}