import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

import imagem from '../../assets/Job.png';

export default function EmpregoList(props) {

    return ( 
        <View style={styles.containerEmpr}>
            <ImageBackground style={styles.imagemFundo}>
                <Image 
                    source={imagem}
                />
            </ImageBackground>
            <View style={styles.detalhesContainer}>
                <View style={styles.styleFundo}>
                    <Text style={styles.Texto}>{props.empresa}</Text>
                    <Text style={styles.Texto}>{props.servico}</Text>
                </View>
            </View>
        </View>
    )
}
2

const styles = StyleSheet.create({
    containerEmpr: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#CFCFCF',
        width: 320,
        height: 80,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        shadowColor: 'black',
        borderColor: "#000000",        
        borderWidth: 0.5,
        borderRadius: 80,
    },

    detalhesContainer: {
        backgroundColor: '#CFCFCF',
        flexDirection: 'row',
        shadowColor: 'black',
    },

    imagemFundo: {
        backgroundColor: '#434343',
        resizeMode: "cover",
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderWidth: 0.5,
        borderRadius: 80,
    },

    styleFundo: {
        justifyContent: 'center',
        alignContent: 'center'
    },

    Texto: {
        fontSize: 16,
        marginLeft: 10,
        marginVertical: 8
    }

});