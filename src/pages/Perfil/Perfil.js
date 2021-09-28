import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default function({ navigation }) {



    return(
        <View style={styles.container}>
            <Text style={styles.Text}>Perfil</Text>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DDE0E1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Text: {
        fontSize: 30
    }

});