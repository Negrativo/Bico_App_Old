import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Button} from 'react-native';
import CalendarioComponent from '../../../Componentes/calendario/calendarioComponent';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Location from 'expo-location';
import Geocoder from 'react-native-geocoding';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import styles from './StylesAgendamentoServico';

export default function({ navigation, route }) {
    const { Token } = useAuth();
    const [horaAgendamento, setHoras] = useState('00:00');
    const [mostraSelecaoHorario, setSelecaoHorario] = useState(false);
    const [endereco, setEndereco] = useState(null);
    const servicosSelecionado = route.params.servicosSelecionado;

    Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx");

    const getLocate = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({});
            let latitude = location.coords.latitude;
            let longitude = location.coords.longitude;
            Geocoder.from(latitude, longitude)
                    .then(json => {
                        console.log(json);
                        var addressComponent = json.results[0].address_components;
                        setEndereco(addressComponent)
                        console.log(addressComponent);
                    })
        }
    }

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;

    const selecionaHorario = (event, selectedDate) => {
        if (event.type === "set") {
            let horario = selectedDate.toString();
            horario = horario.slice(16, 21);
            setHoras(horario);
        }
        setSelecaoHorario(!mostraSelecaoHorario);
    };

    return (
        <ScrollView> 
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
                            onChange={selecionaHorario}
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
                        {endereco}
                    </View>
                    <TouchableOpacity style={styles.textAdicionarEndereco} onPress={getLocate}>
                        <Text style={styles.textAdicionarEndereco} >Buscar endereço</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonSolicitacao}>
                        <Text style={styles.textFinalizacao}>SOLICITAR PROFISSIONAL</Text>
                    </TouchableOpacity> 
                </View>   
            </SafeAreaView>  
        </ScrollView>   
    );
}
