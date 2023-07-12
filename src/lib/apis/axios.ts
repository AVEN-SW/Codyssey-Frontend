import axios from 'axios';

export const AuthInstance = axios.create({
  baseURL: '/login',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
