import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    
    containerEmpr: {
        backgroundColor: '#CFCFCF',
        width: 370,
        height: 650,
        marginBottom: 10,
        marginTop: 10,
        shadowColor: 'black'
    },

    imagemFundo: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#434343',
        width: 130,
        height: 130,
        borderWidth: 0.5,
        borderRadius: 80,
        margin: 10
    },

    barraSuperior: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 20,
        marginTop: 5,
        flex: 0.1
    },

    textoDivoria: {
        fontSize: 18,
        marginLeft: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },

    sair: {
        fontSize: 30,
        margin: 5
    },

    TextoPerfil: {
        fontSize: 20,
        marginLeft: 10,
        margin: 3
    },

    textBottom: {
        fontSize: 18,
        color: "#FFFFFF"
    },

    dadosPerfil: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 240
    },

    formDadosPerfil: {
        flexDirection: 'column',
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 2
    },

    formHistorico: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 20
    },

    formBotaoContato: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        flexDirection: 'row'
    },

    fotoPerfil: {
        width:  150,
        height:  150,
        borderWidth: 0.5,
        borderRadius: 80,
    },

    buttonCadastro:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 270,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    favoritoIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        width:  50,
        height:  50,
        borderWidth: 0.2,
        borderRadius: 50,
        
    },

});