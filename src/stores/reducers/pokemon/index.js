// pokemon Reducers
// --------------------------------------------------------

import {
  SET_LOADING,
  CLEAR_ERROR,
  SET_ERROR,
  SET_DATA_POKEMON,
  SET_NEXT_URL,
  SET_KEY_WORD,
  SET_HAS_MORE
} from 'stores/actions/pokemon';

const url = process.env.REACT_APP_API_URL;
const urlByTypes = process.env.REACT_APP_API_URL_TYPE;

const initialState = {
  isLoading: false,
  hasMore: false,
  error: '',
  keyword: '',
  pokemonList: [],
  urlByTypes,
  url
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: ''
      };
    case SET_DATA_POKEMON:
      return {
        ...state,
        pokemonList: payload
      };
    case SET_NEXT_URL:
      return {
        ...state,
        url: payload
      };
    case SET_KEY_WORD:
      return {
        ...state,
        keyword: payload
      };
    case SET_HAS_MORE:
      return {
        ...state,
        hasMore: payload
      };
    default:
      return state;
  }
};
