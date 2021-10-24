import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import OpcoesComponets from '../tagInput/tagInput';
import styles from './stylesDetalhes';
import api from '../../services/api';

export default function DetalhesUsuario(props) {
    const Dados = props.UserSelecionado;
    const UserLogado = props.UserLogado;
    const [ Favoritar, serFavorito] = useState(false);
    const Empregos = Dados.empregos;
    const Mensagem = `Olá ${Dados.nome}, tudo bem? Sou ${UserLogado.nome}.\nVi seu perfil no aplicativo Bico e gostaria de conversar melhor sobre o assunto.`;

    function clickFavorito() {
        const _id = UserLogado._id;
        const favoritoId = Dados._id;
        api.post(`/favorito/adicionar`, { _id, favoritoId })
        .then(response => {
            console.log(response.status);
            console.log(response.data.Favoritado);
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
        <View style={styles.containerEmpr}>
            <View style={styles.barraSuperior} >
                <TouchableOpacity onPress={props.sair}>
                    <Text style={styles.sair}>X</Text>                
                </TouchableOpacity>
            </View>
            <View style={styles.formDadosPerfil}>
                <ImageBackground style={styles.imagemFundo}>
                    <Image 
                        source={{ uri: Dados.fotoPerfil }} style={styles.fotoPerfil}
                    />
                </ImageBackground>

                <View style={styles.dadosPerfil}>
                    <Text style={styles.TextoPerfil}>{Dados.nome}</Text>
                    <Text style={styles.TextoPerfil}>Avaliação: {Dados.avalicao}</Text>
                    <Text style={styles.TextoPerfil}>{Dados.telefone}</Text>
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
                <TouchableOpacity style={styles.buttonCadastro} onPress={() => entrarEmContato(Dados.telefone)}>
                    <Text style={styles.textBottom}>ENTRAR EM CONTATO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoritoIcon} onPress={() => clickFavorito()}>
                    { Favoritar && <MaterialCommunityIcons name="heart" color={"red"} size={40} /> }
                    { !Favoritar && <MaterialCommunityIcons name="heart-outline" color={"red"} size={40} /> }
                </TouchableOpacity>
            </View>
        </View>
    )
}
