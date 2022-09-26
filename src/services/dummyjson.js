import axios from 'axios'

export const httpDummy = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000
});