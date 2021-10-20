
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Principal from '../pages/principal/Principal';
import Favoritos from '../pages/principal/Favoritos';
import Pesquisa from '../pages/principal/Pesquisa';
import Perfil from '../pages/Perfil/Perfil';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {

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