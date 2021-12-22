import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.111:19003'
});

export default api;