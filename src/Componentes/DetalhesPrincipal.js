import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

import imagem from '../../assets/Job.png';

export default function Detalhes(props) {

    return ( 
        <View style={styles.containerEmpr}>

            <View style={styles.barraSuperior} >
                <TouchableOpacity onPress={props.sair}>
                    <Text style={styles.Texto}>X</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.grupoPerfil}>
                <ImageBackground style={styles.imagemFundo}>
                    <Image 
                        source={imagem}
                    />
                </ImageBackground>

                <View>
                    <Text style={styles.TextoPerfil}>Nome Completo {props.nome}</Text>
                    <Text style={styles.TextoPerfil}>Experiencias {props.emprego}</Text>
                    <Text style={styles.TextoPerfil}>Nota {props.local}</Text>                 
                </View>
            </View>
        
            
            <View>
                <Text style={styles.Texto} >_______________ Informações _______________</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerEmpr: {
        backgroundColor: '#FFFFFF',
        width: 370,
        height: 600,
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
        width: 120,
        height: 120,
        borderWidth: 0.5,
        borderRadius: 80,
        margin: 10
    },

    styleFundo: {
        justifyContent: 'space-around',
        flex: 2,
        width: 50,
        height: 50
    },

    barraSuperior: {
        flexDirection: 'row',
        height: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        direction: 'rtl',
    },

    botaoSair: {
        color: '#CCCCCC'
    },

    Texto: {
        fontSize: 20,
        marginLeft: 10,
    },

    TextoPerfil: {
        fontSize: 20,
        marginLeft: 10,
        margin: 10
    },

    grupoPerfil: {
        flexDirection: 'row',
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }

});