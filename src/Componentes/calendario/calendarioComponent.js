import React, { useState,useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';

import styles from './styleCalendarioComponent';

export default function({ navigation }) {
    const[DiaSelecionado, setDiaSelecionado] = useState('');

    LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
    dayNamesShort: ['Dom','Seg.','Ter','Qua','Qui','Sex','Sab'],
    today: 'Hoje'
    };
    LocaleConfig.defaultLocale = 'br';

    function getDiaSelecionado() {
        return `${DiaSelecionado}`
    }

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={(dia) => setDiaSelecionado(dia.dateString)}
                markedDates={DiaSelecionado}
            ></Calendar>
        </View>     
    );
}
