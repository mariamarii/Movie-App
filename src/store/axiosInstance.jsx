import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
   "Content-Type": "application/json",
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWM3YzNkZWE3MDI0YWMzNjcyNmM4YTUxOGIyNGY2NyIsIm5iZiI6MTcyNTg4MzQ3OC45MDQzNywic3ViIjoiNjZkZWUwZmQ4MDk4NjMzZGRmZWU2ZTg0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.hpjmjbe7FaegObeUA5l5M4oSAiPTFEXr2dHSjZxHgwk',
  },
});

export default axiosInstance;
