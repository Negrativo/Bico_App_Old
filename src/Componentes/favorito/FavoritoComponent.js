import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

import styles from './stylesFavorito';

export default function FavoritoComponent(props) {

    return ( 
        <View style={styles.containerEmpr}>
            <ImageBackground style={styles.imagemFundo}>
                <Image 
                    source={{ uri: props.foto }} style={styles.fotoPerfil}
                />
            </ImageBackground>
            <View style={styles.detalhesContainer}>
                <TouchableOpacity style={styles.styleFundo}>
                    <Text style={styles.Texto}>{props.nome}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
