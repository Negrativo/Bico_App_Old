import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

import imagem from '../../assets/Job.png';

export default function EmpregoList(props) {

    return ( 
        <View style={styles.containerEmpr}>

            <View style={styles.barraSuperior} >
                <TouchableOpacity onPress={props.onPress}>
                    <Text style={styles.Texto}>X</Text>
                </TouchableOpacity>
            </View>
            <ImageBackground style={styles.imagemFundo}>
                <Image 
                    source={imagem}
                />
            </ImageBackground>
            <View style={styles.detalhesContainer}>
                <TouchableOpacity style={styles.styleFundo}>
                    <Text style={styles.Texto}>{props.nome}</Text>
                    <Text style={styles.Texto}>{props.emprego}</Text>
                    <Text style={styles.Texto}>{props.local}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerEmpr: {
        backgroundColor: '#FFFFFF',
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
        flex: 2,
        width: 50,
        height: 50
    },

    barraSuperior: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'flex-end',
        direction: 'rtl',
    },

    botaoSair: {
        color: '#CCCCCC'
    },

    Texto: {
        fontSize: 20,
        marginLeft: 10,
    }

});