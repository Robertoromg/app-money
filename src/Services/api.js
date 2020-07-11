import axios from 'axios';

const api = axios.create({
    baseURL:'http://moneybox.ddns.net:8090'
});

export default api;