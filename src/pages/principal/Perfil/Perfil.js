import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import FavoritoComponent from '../../../Componentes/favorito/FavoritoComponent';

import styles from './StylesPerfil';

export default function() {
    const { User, Token, Logout } = useAuth();

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;
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
                        { !!User.fotoPerfil && <Image source={{ uri: User.fotoPerfil }} style={styles.fotoPerfil} /> }
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
