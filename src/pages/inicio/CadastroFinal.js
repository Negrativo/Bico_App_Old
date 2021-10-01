import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Input, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import { Formik } from 'formik';

import api from '../../services/api';
import ValidateCadastro from '../../Componentes/schema/CadastroSchema';
import OpcoesComponets from '../../Componentes/pesquisaOpcoes';

export default function({ navigation }) {
    const[Dados, setDados] = useState('')
    const[fotoPerfil, setFoto] = useState(null);

    useEffect(() => {
        api.get('/pesquisa/cargos', {})
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }); 

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
                            <ImageBackground style={styles.fotoPerfil}>
                                <Image></Image>
                            </ImageBackground>
                            <TouchableOpacity style={styles.bottomFoto}>
                                <Input type="file" style={styles.textFoto} onChange={event => setFoto(event.target.value)}>Selecionar foto</Input>
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
                        <TouchableOpacity style={styles.buttonCadastro}>
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

    inputDescricao: {
        color: "#FFFFFF",
        textAlignVertical: 'top',
        margin: 20
    },

    fotoPerfil: {
        backgroundColor: '#C4C4C4',
        resizeMode: "cover",
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderRadius: 80,
        margin: 10
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

    formCategorias: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        margin: 20
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
