import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Formik } from 'formik';

import api from '../../services/api';
import ValidateCadastro from '../../Componentes/schema/CadastroSchema';
import Logo from '../../../assets/icos.gif';

export default function({ navigation }) {
    const[Dados, setDados] = useState('');

    async function formataDados(data) {
        console.log(data);
    }
    
    return (
        <View style={styles.container}>

            <Image 
                source={Logo}
                style={styles.logo}
            />  
    
            <Formik
                initialValues={{ nome: '', email: '', senha: '', senha2: '', error: '' }}
                validationSchema={ValidateCadastro}
                onSubmit={(values, { setErrors }) => {
                    let nome = values.nome;
                    let email = values.email;
                    let senha = values.senha;

                    api.post('/cadastro', {
                        nome, email, senha
                    })
                    .then(res => {
                        //Setar os dados do recem cadastrado no banco para usar como referencia para completar cadastro
                        //setDados(res.data);
                        //formataDados(Dados);
                        navigation.navigate('Finalização de cadastro', { _id: res.response });           
                    })
                    .catch(error => {                      
                        console.log(error);
                    });
                }}
            >
                {(props) => (
                    <View style={styles.container}>
                        
                        <View style={styles.form} >
                            <Text style={styles.label}>NOME</Text>  
                            <TextInput 
                                style={styles.input}
                                textAlign="center"
                                textContentType='emailAddress'
                                placeholder="Nome completo"
                                placeholderTextColor="#D9DBDC"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={props.values.nome}
                                onChangeText={text => props.setFieldValue('nome', text)}
                            />
                            { props.dirty && props.errors.nome && <Text style={styles.errors}>{props.errors.nome}</Text> }
                        </View>

                        
                        <View style={styles.form} >
                            <Text style={styles.label}>E-MAIL</Text>
                            <TextInput 
                                style={styles.input}
                                textAlign="center"
                                textContentType='emailAddress'
                                placeholder="E-mail"
                                placeholderTextColor="#D9DBDC"
                                keyboardType="email-address"
                                autoCompleteType="email"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={props.values.email}
                                onChangeText={text => props.setFieldValue('email', text)}
                            /> 
                            { props.dirty && props.errors.email && <Text style={styles.errors}>{props.errors.email}</Text> }
                        </View>

                        
                        <View style={styles.form} >
                            <Text style={styles.label}>SENHA</Text>
                            <TextInput 
                                style={styles.input}
                                textAlign="center"
                                textContentType='password'
                                secureTextEntry={true}
                                placeholder="Senha"
                                placeholderTextColor="#D9DBDC"
                                autoCompleteType="password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={props.values.senha}
                                onChangeText={text => props.setFieldValue('senha', text)}
                            />
                            { props.dirty && props.errors.senha && <Text style={styles.errors}>{props.errors.senha}</Text> }      
                        </View>

                        
                        <View style={styles.form} >
                            <Text style={styles.label}>CONFIRMAR SENHA SENHA</Text>
                            <TextInput 
                                style={styles.input}
                                textAlign="center"
                                textContentType='password'
                                secureTextEntry={true}
                                placeholder="Confirmar Senha"
                                placeholderTextColor="#D9DBDC"
                                autoCompleteType="password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={props.values.senha2}
                                onChangeText={text => props.setFieldValue('senha2', text)}
                            />    
                            { props.dirty && props.errors.senha2 && <Text style={styles.errors}>{props.errors.senha2}</Text> }        
                        </View>

                        { props.errors.error && <Text style={styles.errorCadastro}>{props.errors.error}</Text> }
                        <TouchableOpacity style={styles.button} type="submit" onPress={props.handleSubmit}>
                            <Text style={styles.cadastrar}>CADASTRAR</Text>
                        </TouchableOpacity>                        
                    </View>
                )}
            </Formik>

            <Text style={styles.labelCadastro}>Ao clicar em cadastrar você concorda com os
                <TouchableOpacity>
                    <Text style={styles.labelBold}>TERMOS DE USO</Text>
                </TouchableOpacity>
            </Text>
        </View>     
    );
}

const styles = StyleSheet.create({
    logo: {      
        width:  300,
        height:  150,
        marginTop: 40
    },

    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    cadastrar: {
        color: 'white'
    },

    input: {
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },

    form: {
        width: 300,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 40
    },

    label: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button:{
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 5
    },

    labelCadastro: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 10,
        marginBottom: 20
    },

    labelBold: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        marginTop: 5,
        textDecorationLine: 'underline'
    },

    errors: {
        color: 'red'
    },

    errorCadastro: {
        marginBottom: -20,
    }
});
