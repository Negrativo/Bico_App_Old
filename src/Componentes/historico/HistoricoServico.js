import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

import imagem from '../../assets/Job.png';
import styles from './stylesHistorico';

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