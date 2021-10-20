import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, FlatList, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import MaskInput, { Masks } from 'react-native-mask-input';

import api from '../../services/api';
import ValidateCadastroFone from '../../Componentes/schema/CadastroFoneSchema';
import Pesquisa from '../../Componentes/barraPesquisa/PesquisaComponent';
import styles from '../../Styles/StyleCadastroFinal';
import TagInputSelecionado from '../../Componentes/tagInput/tagInputSelecionado'; 

export default function({ route, navigation }) {
    const [Empregos, setEmpregos] = useState([]);
    const [FotoPerfil, setFoto] = useState('');
    const [EmpregosSelecionados, setEmpregosSelecionados] = useState([]);
    const nome = route.params.nome;
    const email = route.params.email;
    const senha = route.params.senha;

    async function permissao() {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('É necessario permissão para selecionar!');
            }
        }
    }


    useEffect(() => {
        api.get('/pesquisa/cargos', {})
            .then(response => {
                setEmpregos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [Empregos]); 

    
    async function openGaleria() {
        if (permissao()) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
      
            if (!result.cancelled) {
                setFoto(result.uri);    
            }
        }        
    };

    
    adicionarProfissao = (item) => {
        setEmpregosSelecionados([...EmpregosSelecionados, item]);
        console.log(EmpregosSelecionados);
    };

    removerProfissao = (item) => {    
        setEmpregosSelecionados(EmpregosSelecionados.filter((emprego) => emprego !== item));
        console.log(EmpregosSelecionados);
    };

    return (
        <ScrollView style={styles.container}>    
            <Formik
                initialValues={{ telefone: '' }}
                validationSchema={ValidateCadastroFone}
                onSubmit={(values, { setErrors }) => {
                    let fotoPerfil = FotoPerfil;
                    let empregos = EmpregosSelecionados;
                    let telefone = values.telefone;
                    api.post('/usuario/cadastro', { nome, email, senha, 
                        fotoPerfil, empregos, telefone })
                    .then(res => {
                        alert('Cadastro completo!');
                        navigation.navigate('Login');
                    })
                    .catch(error => {
                        console.log(error);                      
                    });   
                }}
            >
                {(props) => (
                    <View style={styles.formTela}>
                        <View style={styles.formFotoPerfil}>
                            <ImageBackground style={styles.backgroudFotoPerfil}>
                                <View>
                                {   FotoPerfil !== '' &&
                                    <Image source={{ uri: FotoPerfil }} style={styles.fotoPerfil}/> 
                                }
                                </View>
                            </ImageBackground>
                            <TouchableOpacity onPress={openGaleria} style={styles.bottomFoto}>
                                <Text style={styles.textFoto}>Selecionar foto</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.textNome}>{nome}</Text>
                        </View>
                        <View style={styles.formDescricao}>
                            <View style={styles.form} >
                                <Text style={styles.label}>Numero para contato profissional</Text>
                                <MaskInput
                                    style={styles.input}    
                                    value={props.values.telefone}
                                    onChangeText={(masked, unmasked, obfuscated) => props.setFieldValue('telefone', unmasked)}
                                    mask={Masks.BRL_PHONE}
                                    textAlign="center"
                                    textContentType='telephoneNumber'
                                    placeholder="Telefone"
                                    placeholderTextColor="#FFFFFF"
                                    autoCompleteType="tel"                                    
                                />    
                            </View>                                            
                        </View>
                        <View style={styles.formCategorias}>
                            <Text style={styles.textPesquisa}>Quais são suas experiências  profissionais?</Text>
                            <Pesquisa Lista={Empregos} placeholder={"Empregos"} selecionaProfissao={adicionarProfissao}/>
                            <View style={styles.formEmpregosSelecionados}>
                            {!(EmpregosSelecionados === '') && 
                                <FlatList
                                    horizontal={false}
                                    numColumns={2}
                                    showsVerticalScrollIndicator={false}
                                    data={EmpregosSelecionados}
                                    keyExtractor={(item, EmpregosSelecionados) => EmpregosSelecionados.toString()}
                                    renderItem={({item}) => {
                                        return (
                                            <TagInputSelecionado emprego={item} removeProfissao={removerProfissao}/>
                                        )
                                    }}
                                />
                            }
                            </View>
                        </View>
                        <TouchableOpacity onPress={props.handleSubmit} style={styles.buttonCadastro}>
                            <Text style={styles.textCadastrar}>FINALIZAR CADASTRO</Text>
                        </TouchableOpacity>                                
                    </View>
                )}
            </Formik>
        </ScrollView>     
    );
}