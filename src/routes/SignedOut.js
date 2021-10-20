
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroInicial from '../pages/inicio/CadastroInicial';
import CadastroFinal from '../pages/inicio/CadastroFinal';
import loginProfissional from '../pages/inicio/loginProfissional';

const Stack = createStackNavigator();

export default function RoutesSignedOut() {

    return (
        <Stack.Group>
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
        </Stack.Group>
    )
}