import React from 'react';
import {StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';

import BottomTabs from './BottomTabs';
import Detalhes from '../pages/principal/DetalhesUsuario/DetalhesUsuario';
import Favoritos from '../pages/principal/Favoritos/Favoritos';
import EditarPerfil from '../pages/principal/EditarPerfil/EditarPerfil';

import CadastroInicial from '../pages/inicio/CadastroInicial/CadastroInicial';
import CadastroFinal from '../pages/inicio/CadastroFinal/CadastroFinal';
import Login from '../pages/inicio/Login/Login';

const Stack = createStackNavigator();

export default function Routes() {   
    const { Logado } = useAuth();
    return (
        <Stack.Navigator>
            {Logado == true ? (
            <>
                <Stack.Screen 
                    name="Home" 
                    children={BottomTabs}
                    options={{
                        headerLeft: ()=> null,
                        headerShown: false
                    }}                
                />
                <Stack.Screen 
                    name="Detalhes"
                    component={Detalhes}
                    options={{
                        title: '',
                        headerStyle: styles.Header,
                        headerBackTitleStyle: styles.labelHeader,
                        headerBackTitleVisible: 'true'
                    }}
                    
                />
                <Stack.Screen 
                    name ="Favoritos" 
                    component={Favoritos}
                    options={{
                        headerStyle: {
                            height: 70,
                            backgroundColor: "#EDEDED"
                        }
                    }} 
                />
                <Stack.Screen 
                    name ="Atualizar dados" 
                    component={EditarPerfil}
                    options={{
                        headerStyle: {
                            height: 70,
                            backgroundColor: "#EDEDED"
                        }
                    }} 
                />
            </>   
            ) : (
            <>
                <Stack.Screen 
                    name="Login" 
                    component={Login}
                    options={{
                        headerLeft: ()=> null,
                        headerShown: false
                    }} 
                />
                <Stack.Screen 
                    name="Cadastro" 
                    component={CadastroInicial} 
                    options={{
                        headerStyle: {
                            height: 70,
                            backgroundColor: "#EDEDED"
                        }
                    }}
                />
                <Stack.Screen 
                    name="Finalização de cadastro" 
                    component={CadastroFinal} 
                    options={{
                        headerStyle: {
                            height: 70,
                            backgroundColor: "#EDEDED"
                        }
                    }}
                />  
            </>
            )} 
        </Stack.Navigator>
    )

}


const styles = StyleSheet.create({
    
    Header: {
        height: 70,
        backgroundColor: "#000000",
    },

    labelHeader: {
        color: 'white'
    }

})
