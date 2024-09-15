import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = () => api.get('/users');
export const getPosts = () => api.get('/posts');
export const getTodos = () => api.get('/todos');
export const getAlbums = () => api.get('/albums');