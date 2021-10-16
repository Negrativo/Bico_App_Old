import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    
    formComponente: {
        backgroundColor: '#C4C4C4',
        borderRadius: 25,
        width: 350,
        position: 'relative',
        maxHeight: 120,
        overflow: 'visible',
    },
    formBarraPesquisa: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderRadius: 50,
        width: 350,
        height: 40,
        justifyContent: "flex-end",
        flexDirection: "row",
    },

    barraPesquisa: {
        backgroundColor: '#FFFFFF',
        width: 290,
        color: 'black' 
    },

    iconPesquisa: {
        resizeMode: "cover",
        alignItems: 'center',
        width: 40,
        height: 40,
        right: 10
    },

    itensPesquisa: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },

    textoOpcao: {
        fontSize: 18
    },

    botaoSelecao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 20,
    },

});