import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ImageBackground, FlatList, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import MaskInput, { Masks } from 'react-native-mask-input';

import api from '../../../services/api';
import { useAuth } from '../../../context/AuthContext';

import ValidateCadastroFone from '../../../Componentes/schema/CadastroFoneSchema';
import Pesquisa from '../../../Componentes/barraPesquisa/PesquisaComponent';
import TagInputSelecionado from '../../../Componentes/tagInput/tagInputSelecionado';

import styles from './StyleEditarPerfil';

export default function({ route, navigation }) {
    const { User } = useAuth();
    const [Empregos, setEmpregos] = useState([]);
    const [FotoPerfil, setFoto] = useState(!!User.fotoPerfil ? User.fotoPerfil : '');
    const [EmpregosSelecionados, setEmpregosSelecionados] = useState(!!User.empregos ? User.empregos : []);
    const [Telefone, setTelefone] = useState(!!User.telefone ? User.telefone : '');
    const [Nome, setNome] = useState(!!User.nome ? User.nome : '');
    const [Email, setEmail] = useState(!!User.email ? User.email : '');
    const _id = User._id;

    async function permissao() {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('É necessario permissão para selecionar!');
            }
        }
    }


    useEffect(() => {
        let mounted = true;
        if(mounted){
            api.get('/pesquisa/cargos', {})
            .then(response => {
                if(mounted)
                    setEmpregos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
        return () => mounted = false;
    }, [Empregos]); 

    
    async function openGaleria() {
        if (permissao()) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true,
            });
      
            if (!result.cancelled) {
                setFoto(`data:image/png;base64,${result.base64}`);
            }
        }        
    };

    
    const adicionarProfissao = (item) => {
        setEmpregosSelecionados([...EmpregosSelecionados, item]);
    };

    const removerProfissao = (item) => {    
        setEmpregosSelecionados(EmpregosSelecionados.filter((emprego) => emprego !== item));
    };

    return (
        <SafeAreaView style={styles.container}>    
            <Formik
                initialValues={{ telefone: '' }}
                validationSchema={ValidateCadastroFone}
                onSubmit={(values, { setErrors }) => {
                    let nome = Nome;
                    let email = Email;
                    let fotoPerfil = FotoPerfil;
                    let empregos = EmpregosSelecionados;
                    let telefone = Telefone;
                    api.post('/usuario/alterarDados', { _id, nome, email, 
                        fotoPerfil, empregos, telefone })
                    .then(res => {
                        alert('Atualizado com sucesso!');
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
                            <TouchableOpacity onPress={() => openGaleria()} style={styles.bottomFoto}>
                                <Text style={styles.textFoto}>Selecionar foto</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.textNome}>{Nome}</Text>
                        </View>
                        <View style={styles.formTelefone}>
                            <Text style={styles.label}>NOME</Text>  
                            <TextInput 
                                style={styles.input}
                                textAlign="center"
                                textContentType='emailAddress'
                                placeholder="Nome completo"
                                placeholderTextColor="#D9DBDC"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={Nome.toString()}
                                onChangeText={nome => setNome(nome)}
                            />
                        </View>                        
                        <View style={styles.formTelefone}>
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
                                value={Email.toString()}
                                onChangeText={email => setEmail(email)}
                            /> 
                        </View>
                        <View style={styles.formTelefone}>
                            <View style={styles.form} >
                                <Text style={styles.label}>Numero de telefone</Text>
                                <MaskInput
                                    style={styles.input}
                                    value={Telefone.toString()}
                                    onChangeText={(masked, unmasked, obfuscated) => setTelefone(unmasked)}
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
                            <Text style={styles.textPesquisa}>Experiências profissionais</Text>
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
                            <Text style={styles.textCadastrar}>ATUALIZAR DADOS</Text>
                        </TouchableOpacity>                                
                    </View>
                )}
            </Formik>
        </SafeAreaView>     
    );
}