import React, { useState,useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, FlatList} from 'react-native';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import styles from './StylesAgendamentoServico';

export default function({ navigation }) {
    const[dadosLista, setDados] = useState('');
    const { Token, User, Logout } = useAuth();
    const [hasErros, setHasErros] = useState(false);

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    return (
        <View style={styles.container}>    
            <View style={styles.container}>
                                                                      
            </View>
        </View>     
    );
}
