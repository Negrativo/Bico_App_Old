import React from 'react';
import { View, Text, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade
  } from "rn-placeholder";

import styles from './stylesUsuarioComponent';

export default function UsuarioComponent(props) {
    const EmpregosData = listaEmpregos();

    function listaEmpregos() {
        const empregos = props.empregos;
        return (!!empregos && empregos.length > 3) ? listaEmpregosLimitados() : empregos;
    }

    function listaEmpregosLimitados() {
        const empregos = props.empregos;
        let lista = empregos.slice(0, 3);
        const calculo = 'E outras: ' + (empregos.length - 3).toString() + ' qualificações';
        lista.push(calculo);
        return lista;
    }

    return ( 
        <>
        { props?.nome && 
            <View style={styles.containerEmpr}>
                <ImageBackground style={styles.imagemFundo}>
                    { !!props.foto && <Image source={{ uri: props.foto }} style={styles.fotoPerfil} /> }
                </ImageBackground>
                <View style={styles.detalhesContainer}>
                    <TouchableOpacity onPress={props.onPress} style={styles.styleFundo}>
                        <View style={styles.detalhesNomeContainer}>
                            <Text style={styles.Texto}>{props.nome}</Text>
                        </View>
                        <View style={styles.detalhesEmpregosContainer}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={EmpregosData}
                                keyExtractor={EmpregosData => EmpregosData.toString()}
                                renderItem={({item}) => (
                                    <Text style={styles.textoEmpregos}>{item}</Text>
                                )}
                            />
                        </View>
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
