import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

import iconPesquisa from '../../../assets/pesquisar.png';
import styles from './stylesPesquisa';

export default function Pesquisa(props) {
    const [Search, setSearch] = useState('');
    const Data = props.Lista;

    function selecionado(nome) {
        props.selecionaProfissao(nome);    
    }

    return ( 
        <View style={styles.formComponente}>
            <View style={styles.formBarraPesquisa}>
                <TextInput
                    style={styles.barraPesquisa}
                    onChangeText={setSearch}
                    placeholder={props.placeholder}
                />
                <Image source={iconPesquisa} style={styles.iconPesquisa}/> 
            </View>
            <ScrollView>
            {!(Search === '') && Data
                .filter((list) => 
                        list.nome
                        .toLowerCase()
                        .includes(Search.toLowerCase()))
                .map((list, index) => (
                    <View key={index} style={styles.itensPesquisa}>
                        <TouchableOpacity key={index} style={styles.botaoSelecao} onPress={() => selecionado(list.nome)}>
                            <Text style={styles.textoOpcao}>{list.nome}</Text>
                        </TouchableOpacity>
                    </View>
                ))
            }
            </ScrollView>
        </View>
       
    );
}
