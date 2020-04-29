// pokemon Reducers
// --------------------------------------------------------

import {
  SET_LOADING,
  CLEAR_ERROR,
  SET_ERROR,
  SET_DATA_POKEMON
} from 'stores/actions/pokemon';

const initialState = {
  isLoading: false,
  error: '',
  data: []
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
        data: payload
      };
    default:
      return state;
  }
};
