import Axios from 'axios';

const ApiCep = (cep) => {
    return Axios.get(`https://viacep.com.br/ws/${cep}/json`);
}

export default ApiCep;
