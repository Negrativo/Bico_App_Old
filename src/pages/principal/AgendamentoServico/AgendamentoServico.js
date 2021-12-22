import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import CalendarioComponent from '../../../Componentes/calendario/calendarioComponent';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import styles from './StylesAgendamentoServico';

export default function({ navigation, route }) {
    const { Token, User, Logout } = useAuth();
    const [horaAgendamento, setHoras] = useState('00:00');
    const [mostraSelecaoHorario, setSelecaoHorario] = useState(false);
    const servicosSelecionado = route.params.servicosSelecionado;

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    const onChange = (event, selectedDate) => {
        if (event.type === "set") {
            let currentDate = selectedDate.toString();
            currentDate = currentDate.slice(16, 21);
            setHoras(currentDate);
        }
        setSelecaoHorario(!mostraSelecaoHorario);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textNome}>{servicosSelecionado}</Text>
            <View style={styles.viewCalendario}>
                <Text style={styles.textGeral}>Qual dia gostaria de agendar:</Text>
                <CalendarioComponent></CalendarioComponent>
            </View>
            <View style={styles.viewHorario}>
                <Text style={styles.textGeral}>Qual o melhor horário para a realização do serviço:</Text>
                <TouchableOpacity onPress={() => setSelecaoHorario(true)} style={styles.horarioInput}>
                    <Text style={styles.textHoraSelecionada} >{horaAgendamento}</Text>
                </TouchableOpacity>
                { mostraSelecaoHorario &&
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={new Date()}
                        mode={'time'}
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                    />
                }
            </View>
            <View style={styles.formObservacao}>
                <Text style={styles.textGeral}>Deseja adicionar alguma observação?</Text>
                <View style={styles.formInputObservacao}>
                    <TextInput style={styles.inputObservacao}
                        multiline={true}
                        placeholder={"Observação"}
                        placeholderTextColor={"#FFFFFF"}                                
                        maxLength={200}
                    />
                </View>                                            
            </View>
            <View style={styles.formEndereco}>
                <Text style={styles.textGeral}>Selecione o endereço para realização do serviço:</Text>
                <View style={styles.formInputObservacao}>
                    
                </View>
                <TouchableOpacity style={styles.textAdicionarEndereco}>
                    <Text style={styles.textAdicionarEndereco} >Adicionar endereço</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonSolicitacao}>
                    <Text style={styles.textFinalizacao}>SOLICITAR PROFISSIONAL</Text>
                </TouchableOpacity> 
            </View>   
        </SafeAreaView>     
    );
}
