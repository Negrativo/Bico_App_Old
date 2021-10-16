import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import OpcoesComponets from '../tagInput/tagInput';
import styles from './stylesDetalhes';

export default function DetalhesUsuario(props) {
    const [ Favorito, serFavorito] = useState(false);
    const Empregos = props.empregos;
    const Mensagem = `Olá ${props.nome}, tudo bem? Vi seu perfil no aplicativo Bico.`;

    function clickFavorito() {
        serFavorito(!Favorito);
    }

    function entrarEmContato(telefone) {
        Linking.openURL(`whatsapp://send?text=${Mensagem}&phone=55${telefone}`);
    }

    return ( 
        <View style={styles.containerEmpr}>
            <View style={styles.barraSuperior} >
                <TouchableOpacity onPress={props.sair}>
                    <Text style={styles.sair}>X</Text>                
                </TouchableOpacity>
            </View>
            <View style={styles.formDadosPerfil}>
                <ImageBackground style={styles.imagemFundo}>
                    <Image 
                        source={{ uri: props.foto }} style={styles.fotoPerfil}
                    />
                </ImageBackground>

                <View style={styles.dadosPerfil}>
                    <Text style={styles.TextoPerfil}>{props.nome}</Text>
                    <Text style={styles.TextoPerfil}>Avaliação: {props.avalicao}</Text>
                    <Text style={styles.TextoPerfil}>{props.telefone}</Text>
                    <Text style={styles.TextoPerfil}>Qualificações</Text>
                    {!!Empregos &&
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Empregos}
                        keyExtractor={(item, Empregos) => Empregos.toString()}
                        renderItem={({item}) => {
                            return (
                                <OpcoesComponets cargo={item}/>         
                            )
                        }}/>
                    }   
                </View>
            </View>

            <View style={styles.formHistorico}>
                <Text style={styles.textoDivoria} >____________________________________________</Text>
                <Text style={styles.textHistorico}>Hitórico</Text>
                <ScrollView>                
                </ScrollView>
            </View>        
         
            <View style={styles.formBotaoContato}>
                <TouchableOpacity style={styles.buttonCadastro} onPress={() => entrarEmContato(props.telefone)}>
                    <Text style={styles.textBottom}>ENTRAR EM CONTATO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoritoIcon} onPress={() => clickFavorito()}>
                    { Favorito && <MaterialCommunityIcons name="heart" color={"red"} size={40} /> }
                    { !Favorito && <MaterialCommunityIcons name="heart-outline" color={"red"} size={40} /> }
                </TouchableOpacity>
            </View>
        </View>
    )
}
