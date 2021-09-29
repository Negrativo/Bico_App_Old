import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, FlatList, TouchableOpacity} from 'react-native';

import EmpregoList from '../../Componentes/EmpregoList';
import DetalhesPrincipal from '../../Componentes/DetalhesPrincipal';
import Styles from '../../Styles/StylesAbasPrincipais';
import iconPesquisa from '../../../assets/pesquisar.png'
import api from '../../services/api';

export default function({ navigation }) {
    const[Dados, setDados] = useState('');
    const[Detalhes, setDetalhes] = useState(false);

    useEffect(() => {
        api.get('/principal/lista', {})
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }); 

    return(
        <View style={Styles.container}>
            <View style={Styles.formBarraPesquisa}>
                <TextInput 
                    style={Styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#D9DBDC"
                    placeholder="Pesquisar">    
                </TextInput> 
                <Image source={iconPesquisa} style={Styles.imagem}/>                 
            </View>
            <View>
                {Detalhes == false &&
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Dados}
                    keyExtractor={(item, Dados) => Dados.toString()}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity>
                                <EmpregoList onPress={() => setDetalhes(!Detalhes)} nome={item.nome} local="" emprego="teste"/>
                            </TouchableOpacity>          
                        )
                    }}
                />
                }
                {Detalhes == true &&
                    <DetalhesPrincipal onPress={() => setDetalhes(!Detalhes)}/>
                }
            </View>            
            
        </View>
    );

}