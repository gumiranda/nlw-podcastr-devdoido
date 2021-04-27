import axios from 'axios';

const api = axios.create({ baseURL: 'https://devdoido.vercel.app/api/' });
export default api;
