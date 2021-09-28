import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function EmpregoList(props) {

    return ( 
        <TouchableOpacity style={styles.formRecomendacao}>
            <Text style={styles.text}>{props.cargo}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    formRecomendacao: {
        backgroundColor: '#434343',
        width: 170,
        height: 25,
        borderWidth: 0.2,
        borderRadius: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        marginBottom: 10
    },

    text: {
        color: 'white'
    }
});