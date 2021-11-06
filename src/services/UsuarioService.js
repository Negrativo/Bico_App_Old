import api from './api';

export async function getDadosUsuario(UserId) {
    let dados = { error: "", data: ""};
    await api.post('/usuario/dadosSelecionado', { _id: UserId })
                .then(response => {
                    dados.error = false;
                    dados.data = response.data;
                })
                .catch(error => {
                    dados.error = true;
                });
    return dados;
};