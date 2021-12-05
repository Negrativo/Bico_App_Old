import React, { useState, useLayoutEffect } from 'react';
import { View, Image, TextInput, FlatList, SafeAreaView} from 'react-native';

import iconPesquisa from '../../../../assets/pesquisar.png';
import EmpregosData from '../../../data/empregos.json';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import CategoriasEmpregosComponent from '../../../Componentes/categoriasEmpregos/categoriasEmpregosComponent';
import CategoriasEmpregosPlaceholder from '../../../Componentes/categoriasEmpregos/categoriasEmpregosPlaceholderComponent';

import styles from './StylesPrincipal';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const { Token, User } = useAuth();

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useLayoutEffect(() => {
        let mounted = true;
        return () => mounted = false;
    }); 

    function acessaServicos(_idSelecionado) {               
        
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
            <SafeAreaView style={styles.formNavegacaoPrincipal}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={EmpregosData}
                    keyExtractor={dadosLista => dadosLista._id}
                    maxToRenderPerBatch={10}
                    ListEmptyComponent={CategoriasEmpregosPlaceholder}
                    renderItem={({item}) => (
                        <CategoriasEmpregosComponent
                            onPress={() => acessaServicos()}
                            nome={item.nome}
                        />
                    )}
                />
            </SafeAreaView>    
            
        </SafeAreaView>
    );

}