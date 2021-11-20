
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Principal from '../pages/principal/Principal/Principal';
import Favoritos from '../pages/principal/Favoritos/Favoritos';
import Pesquisa from '../pages/principal/Pesquisa/Pesquisa';
import Perfil from '../pages/principal/Perfil/Perfil';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {

        return  <Tab.Navigator barStyle={{ backgroundColor: '#000000'}}>
                    <Tab.Screen 
                        name ="Principal" 
                        component={Principal}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="home" color={"#EDEDED"} size={26} />
                            ),
                        }
                    } />
                    <Tab.Screen
                        name ="Pesquisa" 
                        component={Pesquisa}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="magnify" color={"#EDEDED"} size={29} />
                            ),
                        }} 
                    />
                    <Tab.Screen 
                        name ="Perfil" 
                        component={Perfil} 
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account" color={"#EDEDED"} size={26} />
                            ),
                        }} 
                    />
                </Tab.Navigator>
}