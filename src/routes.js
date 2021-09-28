
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import Cadastro from './pages/inicio/Cadastro';
import loginProfissional from './pages/inicio/loginProfissional';
//import ModoLogin from './pages/inicio/ModoLogin';
import Principal from './pages/principal/Principal';
import Favoritos from './pages/principal/Favoritos';
import Pesquisa from './pages/principal/Pesquisa';
import Perfil from './pages/Perfil/Perfil';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function Routes() {

    createBottomTabs = () => {
        return  <Tab.Navigator>
                    <Tab.Screen 
                        name ="Principal" 
                        component={Principal} 
                        options={{
                            tabBarLabel: 'Principal',
                            tabBarColor: "#000000",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="home" color={"#EDEDED"} size={26} />
                            ),
                        }
                    } />
                    <Tab.Screen 
                        name ="Pesquisa" 
                        component={Pesquisa}
                        options={{
                            tabBarLabel: 'Pesquisa',
                            tabBarColor: "#000000",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="magnify" color={"#EDEDED"} size={29} />
                            ),
                        }} 
                    />
                    <Tab.Screen 
                        name ="Favoritos" 
                        component={Favoritos}
                        options={{
                            tabBarLabel: 'Favoritos',
                            tabBarColor: "#000000",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="heart" color={"#EDEDED"} size={26} />
                            ),
                        }} 
                    />
                    <Tab.Screen 
                        name ="Perfil" 
                        component={Perfil} 
                        options={{
                            tabBarLabel: 'Perfil',
                            tabBarColor: "#000000",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account" color={"#EDEDED"} size={26} />
                            ),
                        }} 
                    />
                </Tab.Navigator>
    }
            
            /*<Stack.Screen 
                name="ModoLogin" 
                component={ModoLogin}
                options={{
                    headerLeft: ()=> null,
                    headerShown: false
                }} 
            />*/
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="loginProfissional" 
                component={loginProfissional}
                options={{
                    headerLeft: ()=> null,
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="Cadastro" 
                component={Cadastro} 
                options={{
                    headerStyle: {
                        height: 70,
                        backgroundColor: "#EDEDED"
                    }
                }}
            />
            <Stack.Screen 
                name="Home" 
                children={createBottomTabs}
                options={{
                    headerLeft: ()=> null,
                    headerShown: false
                }}                
            />
        </Stack.Navigator>
    )
}