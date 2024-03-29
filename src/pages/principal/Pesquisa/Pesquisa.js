import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, FlatList } from 'react-native';
import MapView from 'react-native-maps';

import iconPesquisa from '../../../../assets/pesquisar.png';

import { useAuth } from '../../../context/AuthContext';
import api from '../../../services/api';

import useLocation from '../../../Componentes/maps/UserLocation';
import MapsTheme from '../../../Componentes/maps/MapsTheme.json';

import styles from './StylesPesquisa';

export default function() {
    const [Dados, setDados] = useState('');
    const [ErrorMsg, setErrorMsg] = useState(null);
    const [Coords, setCoords] = useState(null);
    const { Token, User } = useAuth();

    api.defaults.headers.common['Authorization'] = `Basic ${Token}`;
     
    const [latitude, setLatitude] = useState(-20.398259);	
    const [longitude, setLongitude] = useState(-43.507726);
    const { coords, errorMsg } = useLocation();

    useEffect(() => {
        let mounted = true;
        if(mounted){
            if (!!Token) {
                api.get('/pesquisa/cargos')
                .then(response => {
                    if(mounted)
                        setDados(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
        return () => mounted = false;
    });    

    return(
        <View style={styles.containerPesquisa}>
            <View style={styles.formBarraPesquisa}>
                <TextInput 
                    style={styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#000000"
                    placeholder="Pesquisar">    
                </TextInput> 
                <Image source={iconPesquisa} style={styles.imagem}/>                 
            </View>

            <View style={styles.formGrupoRecomendacao}>
                <FlatList
                    horizontal={false}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={Dados}
                    keyExtractor={(item, Dados) => Dados.toString()}
                    //renderItem={({item}) => {
                      //  return (
                       //     <TagInput cargo={item.nome}/>
                        //)
                    //}}
                />
            </View>
            <MapView
                showsUserLocation={true}
     	        showsMyLocationButton={true}
                toolbarEnabled={false}
                customMapStyle={MapsTheme}
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'relative',		
                }}
                initialRegion={{
                latitude,	
                longitude,	
                latitudeDelta: 0.195,  	
                longitudeDelta: 0.1921,
                latitude, //...coords	// Aqui sobrescrevemos as variáveis latitude e longitude com a posição do usuário obtida no UserLocation que criamos para obter a localização.
                longitude
              }}
            />
        </View>
    );

}