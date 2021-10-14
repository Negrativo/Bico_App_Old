import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({

    container: {
        backgroundColor: '#DDE0E1',
        flex: 1,
    },

    formFotoPerfil: {
        justifyContent: 'center',
        alignItems: 'center',  
        marginTop: 25     
    },

    formTela: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    formDescricao: {     
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    formInputDescricao: {
        backgroundColor: "#000000",
        height: 200,
        width: 350,        
        borderWidth: 0.5,
        borderRadius: 40,
        margin: 5,
    },

    formCategorias: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 150,
        margin: 10,
    },

    formBarraPesquisa: {
        backgroundColor: '#434343',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 350,
        height: 40,
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10
    },

    formEmpregosSelecionados: {
        height: 50,
        width: 300,
        flex: 1,
        flexWrap: 'wrap'
    },

    inputDescricao: {
        color: "#FFFFFF",
        textAlignVertical: 'top',
        margin: 20
    },

    backgroudFotoPerfil: {
        backgroundColor: '#C4C4C4',
        resizeMode: "cover",
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderRadius: 80,
        margin: 10
    },

    fotoPerfil: {
        backgroundColor: '#C4C4C4',
        resizeMode: "cover",
        width: 150,
        height: 150,
        borderWidth: 0.5,
        borderRadius: 80,
    },

    iconPesquisa: {
        resizeMode: "cover",
        alignItems: 'center',
        width: 40,
        height: 40,
        right: 10
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
        textTransform: 'uppercase',
        margin: 5
    },
    
    textCadastrar: {
        color: 'white'
    },

    textPesquisaEmprego: {
        fontSize: 14,
        margin: 5
    },

    buttonCadastro:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    barraPesquisa: {
        backgroundColor: '#434343',
        width: 290,
        color: 'white' 
    },

    input: {
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 250,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },

    form: {
        width: 300,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 40
    },

    label: {
        fontSize: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
