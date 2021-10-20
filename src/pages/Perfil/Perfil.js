import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

import api from '../../services/api';
import FavoritoComponent from '../../Componentes/favorito/FavoritoComponent';
import { useAuth } from '../../context/AuthContext';

export default function({ route, navigation }) {
    const[Dados, setDados] = useState('')
    const[fotoPerfil, setFoto] = useState(null);
    const { User, Token, Logout } = useAuth();
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

    function logoutUser() {
        Logout();
    }

    return (
        <View style={styles.container}>    
            <View style={styles.container}>
                <View style={styles.formFotoPerfil}>
                    <ImageBackground style={styles.fundoFoto}>
                        <Image 
                            source={{ uri: User.fotoPerfil }} style={styles.fotoPerfil}
                        />
                    </ImageBackground>
                </View>
                <View style={styles.formCabecalhoPerfil}>
                    <Text style={styles.textNome}>{User.nome.toUpperCase()}</Text>
                    <Text style={styles.textGeral}>Avaliação: {User.avaliacao}</Text>
                </View>
                <Text>________________________________</Text>
                <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
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
                        <TouchableOpacity style={styles.buttonCadastro} onPress={() => logoutUser()}>
                            <Text style={styles.textBottom}>Sair</Text>
                        </TouchableOpacity>                          
                        <Text style={styles.divisoria}>________________________________</Text>
                    </View>
                    <View style={styles.formHistorico}>
                        <Text style={styles.textGeral}>Hitórico</Text>
                        <FavoritoComponent nome="Segurança noturno" local="Londrina"/>
                        <FavoritoComponent nome="Segurança de evento" local="Apucarana"/>
                        <FavoritoComponent nome="Secretario de portaria" local="Londrina"/>
                        <FavoritoComponent nome="Garçon" local="Londrina"/>
                        <FavoritoComponent nome="Sergurança de evento" local="Londrina"/>
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

    fundoFoto: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderRadius: 80,
        margin: 10
    },

    fotoPerfil: {
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

    textGeral: {
        fontSize: 18,
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