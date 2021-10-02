import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Input, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';

import api from '../../services/api';
import ValidateCadastro from '../../Componentes/schema/CadastroSchema';
import OpcoesComponets from '../../Componentes/pesquisaOpcoes';

export default function({ route, navigation }) {
    const[Dados, setDados] = useState('')
    const[FotoPerfil, setFoto] = useState('');
    const { _id } = route.params;

    const createFormData = (photo, body = {}) => {
        const data = new FormData();
      
        data.append('photo', {
          name: photo.uri,
          type: photo.type,
          uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
        });
      
        Object.keys(body).forEach((key) => {
          data.append(key, body[key]);
        });
        console.log(data);
        return data;
    };

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
                setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }); 

    async function cadastrar() {
        api.post('/cadastro/conclusao', { _id  })
        .then(res => {
            alert('Cadastro completo!');
            navigation.navigate('Home');
        })
        .catch(error => {
            console.log(error);                      
        });    
    }
    
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

    return (
        <View style={styles.container}>    
            <Formik
                initialValues={{ }}
                validationSchema={ValidateCadastro}
                onSubmit={(values, { setErrors }) => {
                    //let nome = values.nome;

                    api.post('/cadastro', {
                        nome, email, senha
                    })
                    .then(res => {
                        alert('Usuario cadastrado com sucesso!');
                        navigation.navigate('LoginProfissional');
                    })
                    .catch(error => {                      
                        setErrors(error.response.data);
                    });
                }}
            >
                {(props) => (
                    <View style={styles.container}>
                        <View style={styles.formFotoPerfil}>
                            <ImageBackground style={styles.backgroudFotoPerfil}>
                                <View>
                                {   FotoPerfil !== '' &&
                                    <Image source={{uri:FotoPerfil}} style={styles.fotoPerfil}/> 
                                }
                                </View>
                            </ImageBackground>
                            <TouchableOpacity onPress={openGaleria} style={styles.bottomFoto}>
                                <Text style={styles.textFoto}>Selecionar foto</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.textNome}>Nome completo</Text>
                        </View>
                        <View style={styles.formCategorias}>
                            <Text>Quais são suas experiências  profissionais?</Text>
                            <FlatList
                                numColumns={2}
                                showsVerticalScrollIndicator={false}
                                data={Dados}
                                keyExtractor={(item, Dados) => Dados.toString()}
                                renderItem={({item}) => {
                                    return (
                                        <OpcoesComponets cargo={item.nome}/>
                                    )
                                }}
                            />
                        </View>
                        <View style={styles.formDescricao}>
                            <Text>Como você se descreve profissionalmente?</Text>
                            <View style={styles.formInputDescricao}>
                                <TextInput style={styles.inputDescricao}
                                    multiline={true}
                                    placeholder={"Descrição profissional"}
                                    placeholderTextColor={"#FFFFFF"}                                
                                    maxLength={200}
                                    />
                            </View>                                            
                        </View>
                        <TouchableOpacity onPress={cadastrar} style={styles.buttonCadastro}>
                            <Text style={styles.textCadastrar}>FINALIZAR CADASTRO</Text>
                        </TouchableOpacity>                                
                    </View>
                )}
            </Formik>
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

    formInputDescricao: {
        backgroundColor: "#000000",
        height: 200,
        width: 320,        
        borderWidth: 0.5,
        borderRadius: 50,
        margin: 5,
    },

    formCategorias: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        margin: 20
    },

    inputDescricao: {
        color: "#FFFFFF",
        textAlignVertical: 'top',
        margin: 20
    },

    backgroudFotoPerfil: {
        backgroundColor: '#C4C4C4',
        resizeMode: "cover",
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderRadius: 80,
        margin: 10
    },

    fotoPerfil: {
        backgroundColor: '#C4C4C4',
        resizeMode: "cover",
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderRadius: 80,
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

    buttonCadastro:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textCadastrar: {
        color: 'white'
    },
});
