import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, FlatList } from 'react-native';
import MapView from 'react-native-maps';

import iconPesquisa from '../../../assets/pesquisar.png';
import Styles from '../../Styles/StylesAbasPrincipais';
import api from '../../services/api';
//import TagInput from '../../Componentes/tagInput/tagInput';
import useLocation from '../../Componentes/maps/UserLocation';

export default function({ navigation }) {
    const [Dados, setDados] = useState('');
    const [ErrorMsg, setErrorMsg] = useState(null);
    const [Coords, setCoords] = useState(null); 
     
    const [latitude, setLatitude] = useState(-20.398259);	
    const [longitude, setLongitude] = useState(-43.507726);
    const { coords, errorMsg } = useLocation();

    useEffect(() => {
        api.get('/pesquisa/cargos', {})
            .then(response => {
                setDados(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    });    

    return(
        <View style={Styles.containerPesquisa}>
            <View style={Styles.formBarraPesquisa}>
                <TextInput 
                    style={Styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#D9DBDC"
                    placeholder="Pesquisar">    
                </TextInput> 
                <Image source={iconPesquisa} style={Styles.imagem}/>                 
            </View>

            <View style={Styles.formGrupoRecomendacao}>
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
     	        showsMyLocationButton={false}
                toolbarEnabled={false}
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