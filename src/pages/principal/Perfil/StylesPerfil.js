import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({

    container: {
        backgroundColor: '#DDE0E1',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    scrollContainer: {
        backgroundColor: '#DDE0E1',
        flex: 1,
    },


    formFotoPerfil: {
        justifyContent: 'center',
        alignItems: 'center',  
        marginTop: 25     
    },

    formDescricao: {     
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    formHistorico: {     
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    formInputDescricao: {
        backgroundColor: "#000000",
        height: 200,
        width: 320,        
        borderWidth: 0.5,
        borderRadius: 50,
        margin: 5,
    },

    formCabecalhoPerfil: {        
        justifyContent: 'center',
        alignItems: 'center', 
    },

    formBottons: {        
        justifyContent: 'center',
        alignItems: 'center', 
    },

    inputDescricao: {
        color: "#FFFFFF",
        textAlignVertical: 'top',
        margin: 20
    },

    fundoFoto: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderRadius: 80,
        margin: 10
    },

    fotoPerfil: {
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderRadius: 80,
        margin: 10
    },

    bottomFoto: {
        backgroundColor: "#000000",
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 150,        
        borderWidth: 0.5,
        borderRadius: 50,
    },

    textFoto: {
        color: "#FFFFFF"
    },

    textNome: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 5
    },

    textGeral: {
        fontSize: 18,
    },

    textBottom: {
        fontSize: 18,
        color: "#FFFFFF"
    },

    textHistorico: {
        fontSize: 14,
        margin: 5
    },

    formCategorias: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        margin: 20
    },

    buttonCadastro:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    divisoria: {
        color: 'black',
        fontSize: 24
    },

})