import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    logo: {      
        marginTop: -50,
        width:  150,
        height:  180
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },

    container: {
        backgroundColor: '#DDE0E1',
        flex: 2,
        justifyContent: 'center'
    },
    
    cadastrar: {
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

    button:{
        backgroundColor: '#00000F',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 280,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: -5
    },

    labelCadastro: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
        
    },

    labelBold: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        marginTop: 10,
        textDecorationLine: 'underline'
    },

    errors: {
        color: 'red'
    },

    errorCadastro: {
        marginBottom: -20,
    }
});
