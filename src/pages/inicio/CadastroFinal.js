import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';

import api from '../../services/api';
import ValidateCadastro from '../../Componentes/schema/CadastroSchema';
import PesquisaEmprego from '../../Componentes/inicio/PesquisaComponent';
import styles from '../../Styles/StyleCadastroFinal';
import OpcoesDeEmpregoSelecionado from '../../Componentes/inicio/EmpregosSelecionadosComponent'; 

export default function({ route, navigation }) {
    const [Empregos, setEmpregos] = useState([]);
    const [FotoPerfil, setFoto] = useState('');
    const [Descricao, setDescricao] = useState('');
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

    async function cadastrar() {
        let fotoPerfil = FotoPerfil;
        let descricao = Descricao;
        api.post('/usuario/cadastro', { nome, email, senha, 
            descricao, fotoPerfil })
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

    
    adicionarProfissao = (item) => {
        setEmpregosSelecionados([...EmpregosSelecionados, item]);
        console.log(EmpregosSelecionados);
    };

    removerProfissao = (item) => {    
        setEmpregosSelecionados(EmpregosSelecionados.filter((emprego) => emprego !== item));
        console.log(EmpregosSelecionados);
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
                        <View style={styles.formCategorias}>
                            <Text style={styles.textPesquisaEmprego}>Quais são suas experiências  profissionais?</Text>
                            <PesquisaEmprego Lista={Empregos} placeholder={"Empregos"} selecionaProfissao={adicionarProfissao}/>
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
                                            <OpcoesDeEmpregoSelecionado emprego={item} removeProfissao={removerProfissao}/>
                                        )
                                    }}
                                />
                            }
                            </View>
                        </View>
                        <View style={styles.formDescricao}>
                            <Text>Como você se descreve profissionalmente?</Text>
                            <View style={styles.formInputDescricao}>
                                <TextInput style={styles.inputDescricao}
                                    multiline={true}
                                    placeholder={"Descrição profissional"}
                                    placeholderTextColor={"#FFFFFF"}                                
                                    value={Descricao}
                                    onChangeText={setDescricao}
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