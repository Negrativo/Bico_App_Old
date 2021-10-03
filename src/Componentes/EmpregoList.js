import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

import imagem from '../../assets/Job.png';

export default function EmpregoList(props) {
    return ( 
        <View style={styles.containerEmpr}>
            <ImageBackground style={styles.imagemFundo}>
                <Image 
                    source={{ uri: props.foto }} style={styles.fotoPerfil}
                />
            </ImageBackground>
            <View style={styles.detalhesContainer}>
                <TouchableOpacity onPress={props.onPress} style={styles.styleFundo}>
                    <Text style={styles.Texto}>{props.nome}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerEmpr: {
        backgroundColor: '#CFCFCF',
        width: 370,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        shadowColor: 'black'
    },

    detalhesContainer: {
        backgroundColor: '#CFCFCF',
        flexDirection: 'row',
        shadowColor: 'black',
        flex: 6
    },

    imagemFundo: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#434343',
        flex: 3,
        width: 50,
        height: 150
    },

    styleFundo: {
        justifyContent: 'space-around',
        flex: 2
    },

    Texto: {
        fontSize: 20,
        marginLeft: 10
    },

    fotoPerfil: {
        width:  150,
        height:  150
    },

});