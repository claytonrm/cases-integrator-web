import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cases-integrator.rj.r.appspot.com'
});

export default api;
