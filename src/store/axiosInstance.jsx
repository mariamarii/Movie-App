import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
   "Content-Type": "application/json",
    Authorization: 'api key',
  },
});

export default axiosInstance;
