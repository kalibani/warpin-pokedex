// pokemon Actions
// --------------------------------------------------------

/* eslint-disable space-before-function-paren */

export const SET_LOADING = 'pokemon/SET_LOADING';
export const CLEAR_ERROR = 'pokemon/CLEAR_ERROR';
export const SET_ERROR = 'pokemon/SET_ERROR';
export const SET_DATA_POKEMON = 'pokemon/SET_DATA_POKEMON';

export const getPokemonList = (payload) => (dispatch, getState) => {
  const data = getState().pokemon.data;
  const isLoading = getState().pokemon.isLoading;
  dispatch({ type: SET_DATA_POKEMON, payload: data + payload });
  if (!isLoading) {
    dispatch({ type: SET_LOADING, payload: true });
  }
};
