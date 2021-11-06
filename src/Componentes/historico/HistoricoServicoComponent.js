import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

import styles from './stylesHistorico';

export default function HistoricoServicoComponent(props) {

    return ( 
        <View style={styles.containerEmpr}>
            <ImageBackground style={styles.imagemFundo}>
            { !!props.foto && <Image source={{ uri: props.foto }} style={styles.fotoPerfil} /> }
            </ImageBackground>
            <View style={styles.detalhesContainer}>
                <View style={styles.styleFundo}>
                    <TouchableOpacity onPress={props.onPress}>
                        <Text style={styles.Texto}>{props.nome}</Text>
                        <Text style={styles.Texto}>{props.data}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}