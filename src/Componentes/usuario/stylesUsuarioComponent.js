import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    
    containerEmpr: {
        backgroundColor: '#CFCFCF',
        width: 370,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        shadowColor: 'black'
    },

    detalhesContainer: {
        backgroundColor: '#CFCFCF',
        flexDirection: 'row',
        shadowColor: 'black',
        flex: 6
    },

    detalhesNomeContainer: {
        justifyContent: 'center',
        flex: 1,
    },

    detalhesEmpregosContainer: {
        justifyContent: 'flex-start',
        flex: 3,
    },

    imagemFundo: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#434343',
        flex: 3,
        width: 50,
        height: 140
    },

    styleFundo: {
        justifyContent: 'space-around',
        flex: 2
    },

    Texto: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: "bold",
    },

    textoEmpregos: {
        fontSize: 16,
        marginLeft: 10
    },

    fotoPerfil: {
        width:  140,
        height:  140
    },

});
