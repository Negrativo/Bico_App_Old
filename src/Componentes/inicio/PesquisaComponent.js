import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import iconPesquisa from '../../../assets/pesquisar.png';

export default function 
PesquisaEmprego(props) {
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


const styles = StyleSheet.create({
    formComponente: {
        backgroundColor: '#C4C4C4',
        borderRadius: 25,
        width: 350,
        position: 'relative',
        maxHeight: 120,
        overflow: 'visible',
    },
    formBarraPesquisa: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderRadius: 50,
        width: 350,
        height: 40,
        justifyContent: "flex-end",
        flexDirection: "row",
    },

    barraPesquisa: {
        backgroundColor: '#FFFFFF',
        width: 290,
        color: 'black' 
    },

    iconPesquisa: {
        resizeMode: "cover",
        alignItems: 'center',
        width: 40,
        height: 40,
        right: 10
    },

    itensPesquisa: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },

    textoOpcao: {
        fontSize: 18
    },

    botaoSelecao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 20,
    },
});