import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

import imagem from '../../../assets/Job.png';
import styles from './stylesFavorito';

export default function FavoritoComponent(props) {

    return ( 
        <View style={styles.containerEmpr}>
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
