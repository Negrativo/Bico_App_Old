import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, FlatList, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';

import api from '../../services/api';
import ValidateCadastroFone from '../../Componentes/schema/CadastroFoneSchema';
import PesquisaEmprego from '../../Componentes/inicio/PesquisaComponent';
import styles from '../../Styles/StyleCadastroFinal';
import OpcoesDeEmpregoSelecionado from '../../Componentes/inicio/EmpregosSelecionadosComponent'; 

export default function({ route, navigation }) {
    const [Empregos, setEmpregos] = useState([]);
    const [FotoPerfil, setFoto] = useState('');
    const [Descricao, setDescricao] = useState('');
    const [Telefone, setNumeroTelefone] = useState(0);
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
        let empregos = EmpregosSelecionados;
        let telefone = Telefone;
        api.post('/usuario/cadastro', { nome, email, senha, 
            descricao, fotoPerfil, empregos, telefone })
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
        <ScrollView style={styles.container}>    
            <Formik
                initialValues={{ telefone: '' }}
                validationSchema={ValidateCadastroFone}
                onSubmit={(values, { setErrors }) => {
                    setNumeroTelefone(values.telefone);
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
                        <View style={styles.form} >
                            <Text style={styles.label}>Numero para contato profissional</Text>
                            <TextInput 
                                style={styles.input}
                                textAlign="center"
                                textContentType='telephoneNumber'
                                placeholder="Telefone"
                                placeholderTextColor="#FFFFFF"
                                autoCompleteType="tel"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={props.values.telefone}
                                onChangeText={fone => props.setFieldValue('telefone', fone)}
                            />     
                            </View>                                            
                        </View>
                        <TouchableOpacity onPress={cadastrar} style={styles.buttonCadastro}>
                            <Text style={styles.textCadastrar}>FINALIZAR CADASTRO</Text>
                        </TouchableOpacity>                                
                    </View>
                )}
            </Formik>
        </ScrollView>     
    );
}