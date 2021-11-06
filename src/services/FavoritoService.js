import api from './api';

export async function getListaFavoritos(UserId) {
    let dados = { error: "", data: ""};
    await api.post('/favoritos/lista', { _id: UserId })
                .then(response => {
                    dados.error = false;
                    dados.data = response.data;
                })
                .catch(error => {
                    dados.error = true;
                });
    return dados;
};