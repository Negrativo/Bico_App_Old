import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade
  } from "rn-placeholder";

import styles from './stylesUsuarioComponent';

export default function UsuarioComponent(props) {
    return ( 
        <>
        { props?.nome && 
            <View style={styles.containerEmpr}>
                <ImageBackground style={styles.imagemFundo}>
                    { !!props.foto && <Image source={{ uri: props.foto }} style={styles.fotoPerfil} /> }
                </ImageBackground>
                <View style={styles.detalhesContainer}>
                    <TouchableOpacity onPress={props.onPress} style={styles.styleFundo}>
                        <Text style={styles.Texto}>{props.nome}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
        { !props?.nome && 
            <Placeholder
                Animation={Fade}
                Left={PlaceholderMedia}
                Right={PlaceholderMedia}
            >
                <PlaceholderLine width={80} />
                <PlaceholderLine />
                <PlaceholderLine width={30} />
            </Placeholder>
        }
        </>
    )
}
