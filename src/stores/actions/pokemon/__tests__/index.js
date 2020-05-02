import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// Actions to be tested
import * as pokemonActions from '../index';

const mockStore = configureStore([thunk]);
const store = mockStore();
describe('pokemonActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('setLoading', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'payload': true,
          'type': 'pokemon/SET_LOADING',
        },
      ];

      store.dispatch(pokemonActions.setLoading(true));
      expect(store.getActions()).toMatchSnapshot();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('setDataPokemon', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'payload': [],
          'type': 'pokemon/SET_DATA_POKEMON',
        },
      ];

      store.dispatch(pokemonActions.setDataPokemon([]));
      expect(store.getActions()).toMatchSnapshot();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('setNextUrl', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'payload': '',
          'type': 'pokemon/SET_NEXT_URL',
        },
      ];
      
      store.dispatch(pokemonActions.setNextUrl(''));
      expect(store.getActions()).toMatchSnapshot();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


});