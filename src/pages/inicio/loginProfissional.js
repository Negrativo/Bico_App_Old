import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { Formik } from 'formik';

import styles from '../../Styles/StylesInicio';
import ValidateLogin from '../../Componentes/schema/LoginSchema';
import api from '../../services/api';
import fundo from '../../../assets/fundo_login.jpeg';
import ico from '../../../assets/ico.png'

export default function loginProfissional({ navigation }){

    async function handleSubmitCadastro() {
        navigation.navigate('Cadastro');
    };

    return (
    <View style={styles.container}>
        <Formik
            initialValues={{ email: '', senha: '', error: '' }}
            validationSchema={ValidateLogin}
            onSubmit={(values, { setErrors })=> {
                let email = values.email;
                let senha = values.senha;
                api.post('/login', {
                        email, senha
                    })
                    .then(res => {
                        navigation.navigate('Principal');
                    })
                    .catch(error => {
                        console.log(error);                      
                        setErrors({ error: 'Usuario não cadastrado'});
                    });
            }}
        >
            {(props) => (
                <ImageBackground  source={fundo}  style={styles.image}>
                    <Image 
                        source={ico}
                        style={styles.logo}
                    />
                    <ImageBackground style={styles.formLogin}>
                        <Text style={styles.label}>LOGIN</Text>
                        <View style={styles.form} >
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

                        <Text style={styles.label}>SENHA</Text>
                        <View style={styles.form} >
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

                        <View style={styles.buttonContainer}>
                            { props.errors.error && <Text style={styles.errors}>{props.errors.error}</Text> }
                            <TouchableOpacity type="submit" onPress={props.handleSubmit} style={styles.button}>
                                <Text style={styles.labelEntrar} >ENTRAR</Text>
                            </TouchableOpacity>
                        </View>    
                        <TouchableOpacity style={styles.labelBorder}>
                            <Text>Esqueceu sua senha?</Text>
                        </TouchableOpacity>                

                        <Text style={styles.labelCadastro}>Ainda não possui cadastro? Crie um 
                            <Text onPress={handleSubmitCadastro}  style={styles.labelBold}> clicando aqui</Text>
                        </Text>
                    </ImageBackground>
                    
                </ImageBackground>
            )}
        </Formik>    
    </View>
    );
}
