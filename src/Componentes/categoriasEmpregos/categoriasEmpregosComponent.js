import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './stylesCategoriasEmpregos';

export default function categoriasEmpregos(props) {

    return ( 
        <>
        { props?.nome && 
            <View style={styles.containerView}>
                <TouchableOpacity onPress={props.onPress} style={styles.container}>
                    <View style={styles.containerImagem}>
                        { !!props.foto && <Image source={props.foto} style={styles.fotoCategoria} /> }
                    </View>
                    <View style={styles.containerTexto}>
                        <Text style={styles.Texto}>{props.nome}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        }
        </>
    )
}
