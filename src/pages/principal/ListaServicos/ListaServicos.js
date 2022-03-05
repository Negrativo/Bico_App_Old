import React from 'react';
import { View, Image, Text, TextInput, FlatList, SafeAreaView} from 'react-native';

import iconPesquisa from '../../../../assets/pesquisar.png';

import CategoriasEmpregosPlaceholder from '../../../Componentes/categoriasEmpregos/categoriasEmpregosPlaceholderComponent';

import styles from './StylesListaServicos';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function({ route, navigation }) {
    const ListaServicos = route.params.servicosCategoria;

    function toAgendamentoServico(servicosSelecionado) {               
        navigation.navigate('Agendamento', { servicosSelecionado });
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textoCategorias}>Serviços da categoria selecionada</Text>
            <View style={styles.formBarraPesquisa}>
                <TextInput
                    style={styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#000000"
                    placeholder="Pesquisar">    
                </TextInput>
                <Image source={iconPesquisa} style={styles.imagem}/>                 
            </View>
            
            <SafeAreaView style={styles.formNavegacaoPrincipal}>
                <FlatList
                    data={ListaServicos}
                    keyExtractor={dadosLista => dadosLista}
                    ListEmptyComponent={CategoriasEmpregosPlaceholder}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => toAgendamentoServico(item)} style={styles.containerListaServicos}>
                            <View style={styles.contornoDadosLista}>
                                <Text style={styles.Text}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>    
            
        </SafeAreaView>
    );

}