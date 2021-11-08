import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, ImageBackground, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaskInput, { Masks } from 'react-native-mask-input';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import OpcoesComponets from '../../../Componentes/tagInput/tagInput';

import styles from './StylesDetalhesUsuario';

export default function({ route }) {
    const { Token, User, setFavorito } = useAuth();
    const UserSelecionado = route.params.DadosSelecionado;
    const [ Favoritar, setStatusFavorito] = useState();
    const Empregos = UserSelecionado.empregos;
    const Telefone = UserSelecionado.telefone;
    const Mensagem = `Olá ${UserSelecionado.nome}, tudo bem? Sou ${User.nome}.\nEncontrei seu perfil no aplicativo Bico e gostaria de conversar melhor sobre o assunto.`;

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    useEffect(() => {
        let mounted = true;
        if(mounted){
            const statusFavorito = favoritado();
            setStatusFavorito(statusFavorito);
        }
        return () => mounted = false;
    }, [Favoritar]);

    function favoritado() {
        return User.favoritosIds.includes(UserSelecionado._id);
    }
    
    function clickFavorito() {
        const statusFavorito = setFavorito(UserSelecionado._id);
        setStatusFavorito(statusFavorito);
    }

    function entrarEmContato(telefone) {
        Linking.openURL(`whatsapp://send?text=${Mensagem}&phone=55${telefone}`);
        registrarHistorico();
    }

    function registrarHistorico() {    
        const _id = User._id;
        const historicoId = UserSelecionado._id;           
        api.post(`/historico/adicionar`, { _id, historicoId })
            .catch(error => {
                console.log(error);
            });
    }

    return ( 
        <SafeAreaView style={styles.containerEmpr}>
            <View style={styles.formDadosPerfil}>
                <ImageBackground style={styles.imagemFundo}>
                    { !!UserSelecionado.fotoPerfil && <Image source={{ uri: UserSelecionado.fotoPerfil }} style={styles.fotoPerfil} /> }
                </ImageBackground>

                <View style={styles.dadosPerfil}>
                    <Text style={styles.TextoPerfil}>{UserSelecionado.nome}</Text>
                    <Text style={styles.TextoPerfil}>Avaliação: {UserSelecionado.avalicao || 0}</Text>
                    <MaskInput
                        style={styles.TextoPerfil}    
                        value={Telefone.toString()}
                        mask={Masks.BRL_PHONE}
                        textAlign="center"
                        textContentType='telephoneNumber'
                        placeholder="Telefone"
                        placeholderTextColor="#FFFFFF"
                        autoCompleteType="tel"                                    
                    /> 
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
