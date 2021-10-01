import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        flex: 1,
        justifyContent: 'flex-start',
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
        backgroundColor: '#434343',
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
        backgroundColor: '#434343',
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
        marginLeft: 15,
        marginRight: 15
    },
    scrollView: {
        marginHorizontal: 20,
        flex: 1,
        marginTop: 30
    },
    imagem: {
        resizeMode: "cover",
        alignItems: 'center',
        width: 40,
        height: 40,
        right: 10
    },
    grupoCargosPesquisa: {
        padding: 10,        
    }
})