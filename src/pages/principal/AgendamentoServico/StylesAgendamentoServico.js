import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({

    container: {
        backgroundColor: '#fcfcfc',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    formObservacao: {     
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    
    formEndereco: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    formInputObservacao: {
        backgroundColor: "#000000",
        width: 320,
        maxHeight: 150,   
        borderWidth: 0.5,
        borderRadius: 50,
        marginVertical: 5,
        padding: 5,
        justifyContent: 'center'
    },


    viewCalendario: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewHorario: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 3
    },

    textNome: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 5
    },

    textGeral: {
        fontSize: 16,
    },

    textHoraSelecionada: {
        color: 'white',
        fontSize: 30,
    },

    textAdicionarEndereco: {
        fontSize: 16,
        textDecorationLine: 'underline'
    },

    textFinalizacao: {
        color: 'white'
    },

    horarioInput: {
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 120,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },

    inputObservacao: {
        color: "#FFFFFF",
        textAlignVertical: 'top',
        margin: 15,
        fontSize: 16,
    },

    buttonSolicitacao:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

})