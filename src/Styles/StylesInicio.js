import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    logo: {
        marginBottom: 50,
        marginTop: 10,
        width:  200,
        height:  200
    },

    formLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },

    container: {
        backgroundColor: '#DDE0E1',
        flex: 2,
        justifyContent: 'center'
    },

    input: {
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },

    form: {
        width: 250,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },

    label: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 25,
        color: 'white'   
    },

    button:{
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonContainer: {
        marginTop: 60,
        marginBottom: 5,
    },

    labelCadastro: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        color: 'white'
    },

    labelBold: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        marginTop: 5,
        textDecorationLine: 'underline',
        height: 30,
        width: 30
    },

    labelEntrar: {
        color: "#FFFFFF"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },

    validar: {
        fontSize: 20,
        color: "#FFFFFF"
    },

    ViewerModologin: {
        width: 250,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30
    },

    fitaLabelModoLogin: {
        backgroundColor: '#5E6162',
        height: 50,
        width: 500,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputModoLogin: {
        backgroundColor: '#1199C5',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 250,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },

    labelTituloModoLogin: {
        color: "#FFFFFF",
        fontSize: 18,
        
    },

    labelModoLogin: {
        fontSize: 18,
        fontWeight: "bold"
    },

    inputModoLoginVisitante: {
        backgroundColor: '#1199C5',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    errors: {
        color: 'red',
        justifyContent: 'center',
        textAlign: 'center'
    },

    labelBorder: {
        height: 20,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },

    video: {
        position: 'absolute',
        zIndex: 0,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.9,
    },
});
