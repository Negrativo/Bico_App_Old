import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    
    containerEmpr: {
        backgroundColor: '#000000',
        flex: 1,
        shadowColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
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

    TextoHeader: {
        fontSize: 18,
        marginLeft: 10,
        margin: 3,
        color: '#FFFFFF'
    },

    TextoPerfil: {
        fontSize: 18,
        marginLeft: 10,
        margin: 3,
        color: '#000000'
    },
    
    TextoNome: {
        fontSize: 22,
        fontWeight: "bold",
        margin: 3,
        color: '#FFFFFF'
    },

    textBottom: {
        fontSize: 18,
        color: "#FFFFFF"
    },

    dadosPerfil: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 400,
        backgroundColor: '#F0F0F0',
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80
    },

    formDadosPerfil: {
        flexDirection: 'column',
        height: 250,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 2,
        marginTop: 20
    },

    formBotaoContato: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.3,
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
        
    }

})