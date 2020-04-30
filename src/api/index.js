import axios from 'axios';

export const getPokemons = (url) => axios.get(url);
export const getPokemon = (url) => axios.get(url);
export const getByTypes = (url, payload) => axios.get(`${url}/${payload}`);
