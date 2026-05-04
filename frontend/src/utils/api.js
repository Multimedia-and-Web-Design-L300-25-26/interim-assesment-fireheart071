import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Auth API
export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (userData) => api.post('/auth/login', userData);
export const getProfile = () => api.get('/auth/profile');
export const logoutUser = () => api.get('/auth/logout');

// Crypto API
export const getAllCryptos = () => api.get('/crypto');
export const getTopGainers = () => api.get('/crypto/gainers');
export const getNewListings = () => api.get('/crypto/new');
export const addCrypto = (cryptoData) => api.post('/crypto', cryptoData);

export default api;
