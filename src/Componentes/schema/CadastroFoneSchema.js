const Yup = require('yup');

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/


const ValidateCadastroFone = Yup.object().shape({
    telefone: Yup.string().matches(phoneRegExp, 'Número invalido.')
});

export default ValidateCadastroFone;
