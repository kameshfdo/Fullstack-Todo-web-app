import axios from 'axios'

//using axios 
export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
);
