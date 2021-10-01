import React, { useState, useEffect }  from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';

import OpcoesComponets from './pesquisaOpcoes';
import HistoricoServicos from './HistoricoServico';
import imagem from '../../assets/Job.png';

export default function Detalhes(props) {

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
                        source={imagem}
                    />
                </ImageBackground>

                <View>
                    <Text style={styles.TextoPerfil}>{props.nome}</Text>
                    <Text style={styles.TextoPerfil}>Avaliação: {props.local}</Text>
                    <Text style={styles.TextoPerfil}>Experiencias {props.emprego}</Text>   
                    <OpcoesComponets cargo={"Restaurante"}/>
                    <OpcoesComponets cargo={"Motorista"}/>
                    <OpcoesComponets cargo={"Ver todos"}/>
                </View>
            </View>        
            
            <View style={styles.formDetalhes} >
                <Text style={styles.textoDivoria} >_______________ Informações _______________</Text>
                <View style={styles.formInputDescricao}>
                    <TextInput style={styles.inputDescricao}
                        multiline={true}
                        placeholder={"Descrição profissional"}
                        placeholderTextColor={"#000000"}                                
                        maxLength={200}
                        />
                </View> 
            </View>            
            <View style={styles.formHistorico}>
                <Text style={styles.textoDivoria} >____________________________________________</Text>
                <Text style={styles.textHistorico}>Hitórico</Text>
                <ScrollView>                
                    <HistoricoServicos servico="Segurança noturno" empresa="JK Seguranças"/>
                    <HistoricoServicos servico="Segurança de evento" empresa="Aguias Segurança"/>
                    <HistoricoServicos servico="Secretario de portaria" empresa="Condominio Garden"/>
                </ScrollView>
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

    detalhesContainer: {
        backgroundColor: '#CFCFCF',
        flexDirection: 'row',
        shadowColor: 'black',
        flex: 6
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

    styleFundo: {
        justifyContent: 'space-around',
        flex: 2,
        width: 50,
        height: 50
    },

    barraSuperior: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 20,
        marginTop: 5
    },

    botaoSair: {
        color: '#CCCCCC'
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

    inputDescricao: {
        textAlignVertical: 'top',
        margin: 20
    },

    formDadosPerfil: {
        flexDirection: 'row',
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    formDetalhes: {
        height: 200,
        alignItems: 'center'
    },

    formInputDescricao: {
        backgroundColor: "#CFCFCF",
        height: 200,
        width: 320,        
        borderWidth: 0.5,
        borderRadius: 50,
        margin: 5,
        borderColor: "#CFCFCF"
    },

    formHistorico: {
        justifyContent: 'center',
        alignItems: 'center'
    }

});