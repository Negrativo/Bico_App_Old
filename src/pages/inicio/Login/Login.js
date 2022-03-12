import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { Formik } from 'formik';
import { Video } from 'expo-av';

import videoFundo from '../../../../assets/fundofinal.mp4';
import ico from '../../../../assets/adaptive-icon.png';

import { useAuth } from '../../../context/AuthContext';

import ValidateLogin from '../../../Componentes/schema/LoginSchema';

import styles from './StylesLogin';

export default function Login({ navigation }){
    const { Login } = useAuth();

    async function handleSubmitCadastro() {
        navigation.navigate('Cadastro');
    };

    function handleLogin(email, senha) {
        Login(email, senha);
    }

    return (
    <View style={styles.container}>        

        <Formik
            initialValues={{ email: '', senha: '', error: '' }}
            validationSchema={ValidateLogin}
            onSubmit={(values, { setErrors })=> {
                let email = values.email;
                let senha = values.senha;
                handleLogin(email,senha);
            }}
        >
            {(props) => (
                <View  style={styles.image}>
                    <Video
                        source={videoFundo}
                        style={styles.video}
                        isLooping={true}
                        isMuted
                        onTouchStart
                        shouldPlay={true}
                        resizeMode="cover"
                    />
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
                                placeholderTextColor="#FFFFFF"
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
                            <Text style={styles.labelEntrar}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>                

                        <Text style={styles.labelCadastro}>Ainda não possui cadastro? Crie um 
                            <Text onPress={handleSubmitCadastro}  style={styles.labelBold}> clicando aqui</Text>
                        </Text>
                    </ImageBackground>
                    
                </View>
            )}
        </Formik>    
    </View>
    );
}
