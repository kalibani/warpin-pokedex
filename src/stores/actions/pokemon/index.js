/* eslint-disable consistent-return */
// pokemon Actions
// --------------------------------------------------------

import { getPokemons, getPokemon, getByTypes } from 'api';


export const SET_LOADING = 'pokemon/SET_LOADING';
export const CLEAR_ERROR = 'pokemon/CLEAR_ERROR';
export const SET_ERROR = 'pokemon/SET_ERROR';
export const SET_DATA_POKEMON = 'pokemon/SET_DATA_POKEMON';
export const SET_NEXT_URL = 'pokemon/SET_NEXT_URL';
export const SET_KEY_WORD = 'pokemon/SET_KEY_WORD';
export const SET_HAS_MORE = 'pokemon/SET_HAS_MORE';

export const setLoading = (payload) => (dispatch) => {
  dispatch({ type: SET_LOADING, payload });
};

export const setDataPokemon = (payload) => (dispatch) => {
  dispatch({ type: SET_DATA_POKEMON, payload });
};

export const setNextUrl = (payload) => (dispatch) => {
  dispatch({ type: SET_NEXT_URL, payload });
};

export const setError = (payload) => (dispatch) => {
  dispatch({ type: SET_ERROR, payload });
};

export const setHasMore = (payload) => (dispatch) => {
  dispatch({ type: SET_HAS_MORE, payload });
};

export const setKeyword = (payload) => (dispatch) => {
  dispatch({ type: SET_KEY_WORD, payload });
};

export const getEachPokemon = (promises, isSearching) => (dispatch, getState) => {
  Promise.all(promises)
    .then((response) => {
      if (isSearching) {
        dispatch(setDataPokemon(response));
      } else {
        const pokemonList = getState().pokemon.pokemonList;
        const result = [...pokemonList, ...response];
        dispatch(setDataPokemon(result));
      }

      dispatch(setLoading(false));
    })
    .catch((error) => {
      dispatch(setLoading(false));
      dispatch(setError(error));
    });
};

export const getDataPokemonList = () => (dispatch, getState) => {
  dispatch(setLoading(true));
  dispatch(setHasMore(true));
  const url = getState().pokemon.url;
  getPokemons(url)
    .then(async ({ data }) => {
      const nextUrl = data.next;
      dispatch(setNextUrl(nextUrl));
      const promises = [];
      data.results.map((element) => promises.push(getPokemon(element.url)));
      await dispatch(getEachPokemon(promises));
    }).catch((error) => {
      dispatch(setLoading(false));
      dispatch(setError(error));
    });
};

export const searchPokemonByTypes = () => (dispatch, getState) => {
  const keyword = getState().pokemon.keyword;
  if (!keyword) { return false; }
  const url = getState().pokemon.urlByTypes;
  dispatch(setLoading(true));
  dispatch(setHasMore(false));

  getByTypes(url, keyword)
    .then(async ({ data }) => {
      const promises = [];
      data.pokemon.map((element) => promises.push(getPokemon(element.pokemon.url)));
      await dispatch(getEachPokemon(promises, true));
    }).catch((error) => {
      dispatch(setLoading(false));
      dispatch(setDataPokemon([]));
      dispatch(setError(error));
    });
};
