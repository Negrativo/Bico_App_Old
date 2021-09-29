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


            
        
        </View>
    )
}


const styles = StyleSheet.create({
    containerEmpr: {
        backgroundColor: '#CFCFCF',
        width: 380,
        height: 600,
        flexDirection: 'column',
        marginBottom: 10,
        shadowColor: 'black'
    },

    imagemFundo: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#434343',
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