import React, { useState } from 'react';
import { View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';

import styles from './styleCalendarioComponent';

export default function({ navigation }) {
    const _format = 'YYYY-MM-DD';
    const _today = moment().format(_format);
    const[markedDates, setMarkedDates] = useState({[_today]: {disabled: true}})

    LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
    dayNamesShort: ['Dom','Seg.','Ter','Qua','Qui','Sex','Sab'],
    today: 'Hoje'
    };
    LocaleConfig.defaultLocale = 'br';

    function onDaySelect(day) {
        const _selectedDay = moment(day.dateString).format(_format);
        
        let marked = true;
        if (markedDates[_selectedDay]) {
          marked = !markedDates[_selectedDay].marked;
        }
        
        const updatedMarkedDates = {...markedDates, ...{ [_selectedDay]: { marked } } }

        setMarkedDates(updatedMarkedDates);
    }

    return (
        <View style={styles.container}>
            <Calendar
                onDayPress={(dia) => onDaySelect(dia)}
                markedDates={markedDates}
            ></Calendar>
        </View>     
    );
}
