import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { Formik } from 'formik';

import Logo from '../../../../assets/adaptive-icon.png';
import fundo from '../../../../assets/fundo_login.jpeg';

import api from '../../../services/api';

import ValidateCadastro from '../../../Componentes/schema/CadastroSchema';

import styles from './StylesCadastroInicial';

export default function({ navigation }) {
    const[Dados, setDados] = useState('');

    return (
        <View source={fundo} style={styles.container}>
    
            <Formik
                initialValues={{ nome: '', email: '', senha: '', senha2: '', error: '' }}
                validationSchema={ValidateCadastro}
                onSubmit={(values, { setErrors }) => {
                    let nome = values.nome;
                    let email = values.email;
                    let senha = values.senha;
                    api.post('/login', {
                        email, senha
                    })
                    .then(res => {
                        alert('Usuario já cadastrado');
                    })
                    .catch(error => {           
                        navigation.navigate('Finalização de cadastro', { nome, email, senha });
                    });
                }}
            >
                {(props) => (
                    <ImageBackground  source={fundo}  style={styles.image}>
                        
                        <Image 
                            source={Logo}
                            style={styles.logo}
                        />  

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
                        <Text style={styles.labelCadastro}>Ao clicar em cadastrar você concorda com os
                            <TouchableOpacity>
                                <Text style={styles.labelBold}>TERMOS DE USO</Text>
                            </TouchableOpacity>
                        </Text>                       
                    </ImageBackground>
                )}
            </Formik>
        </View>     
    );
}
