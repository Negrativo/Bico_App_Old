import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native';

import OpcoesComponets from './pesquisaOpcoes';

export default function Detalhes(props) {
    const Empregos = props.empregos;
    const Mensagem = `Olá ${props.nome}, tudo bem? Vi seu perfil no aplicativo Bico.`;


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
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    containerEmpr: {
        backgroundColor: '#CFCFCF',
        width: 370,
        height: 650,
        marginBottom: 10,
        marginTop: 10,
        shadowColor: 'black'
    },

    imagemFundo: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#434343',
        width: 130,
        height: 130,
        borderWidth: 0.5,
        borderRadius: 80,
        margin: 10
    },

    barraSuperior: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 20,
        marginTop: 5,
        flex: 0.1
    },

    textoDivoria: {
        fontSize: 18,
        marginLeft: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },

    sair: {
        fontSize: 30,
        margin: 5
    },

    TextoPerfil: {
        fontSize: 20,
        marginLeft: 10,
        margin: 3
    },

    textBottom: {
        fontSize: 18,
        color: "#FFFFFF"
    },

    dadosPerfil: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 240
    },

    formDadosPerfil: {
        flexDirection: 'column',
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 2
    },

    formHistorico: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 20
    },

    formBotaoContato: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5
    },

    fotoPerfil: {
        width:  150,
        height:  150,
        borderWidth: 0.5,
        borderRadius: 80,
    },

    buttonCadastro:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

});