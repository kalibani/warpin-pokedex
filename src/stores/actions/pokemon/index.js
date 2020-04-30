// pokemon Actions
// --------------------------------------------------------

import { getPokemons, getPokemon, getByTypes } from 'api';


export const SET_LOADING = 'pokemon/SET_LOADING';
export const CLEAR_ERROR = 'pokemon/CLEAR_ERROR';
export const SET_ERROR = 'pokemon/SET_ERROR';
export const SET_DATA_POKEMON = 'pokemon/SET_DATA_POKEMON';
export const SET_NEXT_URL = 'pokemon/SET_NEXT_URL';

const setLoading = (payload) => (dispatch) => {
  dispatch({ type: SET_LOADING, payload });
};

const setDataPokemon = (payload) => (dispatch) => {
  dispatch({ type: SET_DATA_POKEMON, payload });
};

const setNextUrl = (payload) => (dispatch) => {
  dispatch({ type: SET_NEXT_URL, payload });
};

const setError = (payload) => (dispatch) => {
  dispatch({ type: SET_ERROR, payload });
};

export const getEachPokemon = (promises) => (dispatch) => {
  Promise.all(promises)
    .then((response) => {
      dispatch(setDataPokemon(response));
      dispatch(setLoading(false));
      console.warn('each pokemon', response);
    })
    .catch((error) => {
      dispatch(setLoading(false));
      dispatch(setError(error));
    });
};

export const getDataPokemonList = () => (dispatch, getState) => {
  dispatch(setLoading(true));
  const url = getState().pokemon.url;
  getPokemons(url)
    .then(async ({ data }) => {
      const nextUrl = data.next;
      dispatch(setNextUrl(nextUrl));
      const promises = [];
      data.results.map((element) => promises.push(getPokemon(element.url)));
      await dispatch(getEachPokemon(promises));
      console.warn('data', data);
    }).catch((error) => {
      dispatch(setLoading(false));
      dispatch(setError(error));
      console.warn('error', error);
    });
};

export const searchPokemonByTypes = (payload) => (dispatch, getState) => {
  dispatch(setLoading(true));
  const url = getState().pokemon.urlByTypes;
  getByTypes(url, payload)
    .then(async ({ data }) => {
      const promises = [];
      data.pokemon.map((element) => promises.push(getPokemon(element.url)));
      await dispatch(getEachPokemon(promises));
      console.warn('data', data);
    }).catch((error) => {
      dispatch(setLoading(false));
      dispatch(setError(error));
      console.warn('error', error);
    });
};
