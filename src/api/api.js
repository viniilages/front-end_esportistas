import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:27017/esportistas', // Altere conforme necessário
});

export default api;
