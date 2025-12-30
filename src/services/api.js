import axios from 'axios';

const api = axios.create({
    baseURL: 'https://opinai-backend.onrender.com' 
});

export default api;