import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';

import BottomTabs from './BottomTabs';
import Detalhes from '../pages/principal/DetalhesUsuario/DetalhesUsuario';

import CadastroInicial from '../pages/inicio/CadastroInicial/CadastroInicial';
import CadastroFinal from '../pages/inicio/CadastroFinal/CadastroFinal';
import Login from '../pages/inicio/Login/Login';

const Stack = createStackNavigator();

export default function Routes(props) {   
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
