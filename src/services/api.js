import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.16.0.117:19003'
});

export default api;