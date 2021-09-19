import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

import imagem from '../../assets/Job.png';

export default function EmpregoList(props) {

    return ( 
        <View style={styles.containerEmpr}>
            <ImageBackground style={styles.imagemFundo}>
                <Image 
                    source={imagem}
                />
            </ImageBackground>
            <View style={styles.styleFundo}>
                <Text style={styles.Texto}>{props.nome}</Text>
                <Text style={styles.Texto}>{props.emprego}</Text>
                <Text style={styles.Texto}>{props.local}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerEmpr: {
        backgroundColor: '#CDDFFA',
        width: 370,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10
    },

    imagemFundo: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#1087AC',
        flex: 1,
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
    }

});