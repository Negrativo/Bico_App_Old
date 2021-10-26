import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, FlatList, Linking} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import OpcoesComponets from '../../Componentes/tagInput/tagInput';

export default function({ route, navigation }) {
    const { Token, User } = useAuth();
    const UserSelecionado = route.params.DadosSelecionado;
    const [ Favoritar, serFavorito] = useState(favoritado);
    const Empregos = UserSelecionado.empregos;
    const Mensagem = `Olá ${UserSelecionado.nome}, tudo bem? Sou ${User.nome}.\nEncontrei seu perfil no aplicativo Bico e gostaria de conversar melhor sobre o assunto.`;

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useLayoutEffect(() => {
       
    }); 

    function favoritado() {
        console.log(User.favoritosIds.includes(UserSelecionado._id));
        return User.favoritosIds.includes(UserSelecionado._id);
    }
    function clickFavorito() {
        const _id = User._id;
        const favoritoId = UserSelecionado._id;
        api.post(`/favorito/adicionar`, { _id, favoritoId })
        .then(response => {
            serFavorito(response.data.Favoritado);
        })
        .catch(error => {
            console.log(error);
        });
    }

    function entrarEmContato(telefone) {
        Linking.openURL(`whatsapp://send?text=${Mensagem}&phone=55${telefone}`);
    }

    return ( 
        <SafeAreaView style={styles.containerEmpr}>
            <View style={styles.formDadosPerfil}>
                <ImageBackground style={styles.imagemFundo}>
                    <Image 
                        source={{ uri: UserSelecionado.fotoPerfil }} style={styles.fotoPerfil}
                    />
                </ImageBackground>

                <View style={styles.dadosPerfil}>
                    <Text style={styles.TextoPerfil}>{UserSelecionado.nome}</Text>
                    <Text style={styles.TextoPerfil}>Avaliação: {UserSelecionado.avalicao}</Text>
                    <Text style={styles.TextoPerfil}>{UserSelecionado.telefone}</Text>
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
                <TouchableOpacity style={styles.buttonCadastro} onPress={() => entrarEmContato(UserSelecionado.telefone)}>
                    <Text style={styles.textBottom}>ENTRAR EM CONTATO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoritoIcon} onPress={() => clickFavorito()}>
                    { Favoritar && <MaterialCommunityIcons name="heart" color={"red"} size={40} /> }
                    { !Favoritar && <MaterialCommunityIcons name="heart-outline" color={"red"} size={40} /> }
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    
    containerEmpr: {
        backgroundColor: '#CFCFCF',
        flex: 1,
        shadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
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
        height: 250,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 2,
        marginTop: 50
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
        flex: 0.5,
        flexDirection: 'row'
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
        width: 270,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    favoritoIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width:  50,
        height:  50,
        borderWidth: 0.2,
        borderRadius: 50,
        
    },

});