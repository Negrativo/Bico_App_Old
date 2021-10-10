import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function EmpregoList(props) {

    function removerProfissao(nome) {
        props.removeProfissao(nome);
    };

    return ( 
        <TouchableOpacity style={styles.formComponent} onPress={() => removerProfissao(props.emprego)}>
            <Text style={styles.text}>{props.emprego}</Text>
            <Text style={styles.remover}>X</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    formComponent: {
        backgroundColor: '#000000',
        width: 130,
        height: 25,
        borderWidth: 0.2,
        borderRadius: 15,
        margin: 5,
        alignItems: 'center',
        flexDirection: 'row'
    },

    text: {
        color: 'white',
        marginLeft: 10,
        flex: 5
    },

    remover: {
        color: 'white',
        fontSize: 15,
        flex: 1,
    }
});