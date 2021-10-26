import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';

import BottomTabs from './BottomTabs';
import CadastroInicial from '../pages/inicio/CadastroInicial';
import CadastroFinal from '../pages/inicio/CadastroFinal';
import loginProfissional from '../pages/inicio/loginProfissional';
import Detalhes from '../pages/principal/DetalhesUsuario';

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
                    component={loginProfissional}
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
