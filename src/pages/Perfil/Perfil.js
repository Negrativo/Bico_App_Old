import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

import api from '../../services/api';
import FavoritoList from '../../Componentes/FavoritoList';

export default function({ route, navigation }) {
    const[Dados, setDados] = useState('')
    const[fotoPerfil, setFoto] = useState(null);

    /*
    Sera usado para buscar o historico de serviço realizado pelo usuario
    useEffect(() => {
        api.get('/pesquisa/cargos', {})
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }); */

    return (
        <View style={styles.container}>    
            <View style={styles.container}>
                <View style={styles.formFotoPerfil}>
                    <ImageBackground style={styles.fotoPerfil}>
                        <Image></Image>
                    </ImageBackground>
                </View>
                <View style={styles.formCabecalhoPerfil}>
                    <Text style={styles.textNome}>NOME COMPLETO</Text>
                    <Text>Avaliação: 0.0</Text>
                </View>
                <Text>________________________________</Text>
                <ScrollView style={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.formDescricao}>
                        <View style={styles.formInputDescricao}>
                            <TextInput style={styles.inputDescricao}
                                multiline={true}
                                placeholder={"Descrição profissional"}
                                placeholderTextColor={"#FFFFFF"}                                
                                maxLength={200}
                                />
                        </View>                                            
                    </View>
                    <View style={styles.formBottons}>
                        <TouchableOpacity style={styles.buttonCadastro}>
                            <Text style={styles.textBottom}>Editar perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCadastro}>
                            <Text style={styles.textBottom}>ANUNCIAR EMPREGO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCadastro}>
                            <Text style={styles.textBottom}>Configurações</Text>
                        </TouchableOpacity>                        
                        <Text style={styles.divisoria}>________________________________</Text>
                    </View>
                    <View style={styles.formHistorico}>
                        <Text style={styles.textHistorico}>Hitórico</Text>
                        <FavoritoList nome="Segurança noturno" local="Londrina"/>
                        <FavoritoList nome="Segurança de evento" local="Apucarana"/>
                        <FavoritoList nome="Secretario de portaria" local="Londrina"/>
                        <FavoritoList nome="Garçon" local="Londrina"/>
                        <FavoritoList nome="Sergurança de evento" local="Londrina"/>
                    </View>
                </ScrollView>                                                       
            </View>
        </View>     
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#DDE0E1',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    scrollContainer: {
        backgroundColor: '#DDE0E1',
        flex: 1,
    },


    formFotoPerfil: {
        justifyContent: 'center',
        alignItems: 'center',  
        marginTop: 25     
    },

    formDescricao: {     
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    formHistorico: {     
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    formInputDescricao: {
        backgroundColor: "#000000",
        height: 200,
        width: 320,        
        borderWidth: 0.5,
        borderRadius: 50,
        margin: 5,
    },

    formCabecalhoPerfil: {        
        justifyContent: 'center',
        alignItems: 'center', 
    },

    formBottons: {        
        justifyContent: 'center',
        alignItems: 'center', 
    },

    inputDescricao: {
        color: "#FFFFFF",
        textAlignVertical: 'top',
        margin: 20
    },

    fotoPerfil: {
        backgroundColor: '#C4C4C4',
        resizeMode: "cover",
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderRadius: 80,
        margin: 10
    },

    bottomFoto: {
        backgroundColor: "#000000",
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 150,        
        borderWidth: 0.5,
        borderRadius: 50,
    },

    textFoto: {
        color: "#FFFFFF"
    },

    textNome: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 5
    },

    textBottom: {
        fontSize: 18,
        color: "#FFFFFF"
    },

    textHistorico: {
        fontSize: 14,
        margin: 5
    },

    formCategorias: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        margin: 20
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

    divisoria: {
        color: 'black',
        fontSize: 24
    },
});