import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://globalnetsis.com.br/clientes/chicrecheme/api', //'http://localhost:8080/orders-project/api'
    timeout: 10000,
    headers: {
        'accept': 'application/json'
    }
});

export default Api;