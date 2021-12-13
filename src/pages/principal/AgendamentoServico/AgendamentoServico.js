import React, { useState,useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import CalendarioComponent from '../../../Componentes/calendario/calendarioComponent';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import styles from './StylesAgendamentoServico';

export default function({ navigation, route }) {
    const[dadosLista, setDados] = useState('');
    const { Token, User, Logout } = useAuth();
    const [hasErros, setHasErros] = useState(false);
    const servicosSelecionado = route.params.servicosSelecionado;

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.textNome}>{servicosSelecionado}</Text>
                <Text style={styles.textGeral}>Qual dia gostaria de agendar:</Text>
                <CalendarioComponent></CalendarioComponent>                                                  
            </View>
        </View>     
    );
}
