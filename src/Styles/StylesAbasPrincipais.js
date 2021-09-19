import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontSize: 30
    },
    containerPesquisa: {
        backgroundColor: '#DDE0E1',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    barraPesquisa: {
        backgroundColor: '#1199C5',
        width: 290 
    },
    imagem: {
        resizeMode: "cover",
        alignItems: 'center',
        width: 40,
        height: 40,
        right: 10
    },
    formBarraPesquisa: {
        backgroundColor: '#1199C5',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 350,
        height: 40,
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 50,
        marginBottom: 10
    },
    formRecomendacao: {
        backgroundColor: '#1087AC',
        width: 170,
        height: 25,
        borderWidth: 0.2,
        borderRadius: 15,
        marginHorizontal: 5,
        alignItems: 'center'
    },
    formGrupoRecomendacao: {
        justifyContent: "flex-start",
        flexDirection: "row",
        width: 360,
        height: 50,
        marginBottom: -15

    },
    scrollView: {
        marginHorizontal: 20,
        flex: 1,
        marginTop: 10
    },
    barraPesquisa: {
        backgroundColor: '#1199C5',
        width: 290 
    },
    imagem: {
        resizeMode: "cover",
        alignItems: 'center',
        width: 40,
        height: 40,
        right: 10
    },
    formBarraPesquisa: {
        backgroundColor: '#1199C5',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 350,
        height: 40,
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 50
    },
})