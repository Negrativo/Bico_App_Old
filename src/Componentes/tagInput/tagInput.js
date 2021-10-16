import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function tagInput(props) {

    return ( 
        <TouchableOpacity style={styles.formRecomendacao}>
            <Text style={styles.text}>{props.cargo}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    formRecomendacao: {
        backgroundColor: '#000000',
        width: 170,
        height: 25,
        borderWidth: 0.2,
        borderRadius: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },

    text: {
        color: 'white'
    }
});