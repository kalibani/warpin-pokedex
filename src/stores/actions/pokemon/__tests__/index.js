import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getPokemons, getPokemon, getByTypes } from 'api';

// Actions to be tested
import * as pokemonActions from '../index';
import pokemon from 'stores/reducers/pokemon';
import { response } from 'express';


const mockStore = configureStore([thunk]);
const url = process.env.REACT_APP_API_URL;
const urlByTypes = process.env.REACT_APP_API_URL_TYPE;
const mockState = {
  pokemon: { 
    url: url,
    urlByTypes: urlByTypes
  }
}

// const store = mockStore();
const store = mockStore(() => mockState);
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

  describe('setError', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'payload': '',
          'type': 'pokemon/SET_ERROR',
        },
      ];
      
      store.dispatch(pokemonActions.setError(''));
      expect(store.getActions()).toMatchSnapshot();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('setHasMore', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'payload': true,
          'type': 'pokemon/SET_HAS_MORE',
        },
      ];
      
      store.dispatch(pokemonActions.setHasMore(true));
      expect(store.getActions()).toMatchSnapshot();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('setKeyword', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          'payload': '',
          'type': 'pokemon/SET_KEY_WORD',
        },
      ];
      
      store.dispatch(pokemonActions.setKeyword(''));
      expect(store.getActions()).toMatchSnapshot();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  describe('getDataPokemonList', () => {

    it('should execute setLoading', () => {
      const expectedActions = [
        {
          'payload': true,
          'type': 'pokemon/SET_LOADING',
        },
      ];

      store.dispatch(pokemonActions.setLoading(true));
      expect(store.getActions()).toMatchSnapshot();
      expect(store.getActions()).toEqual(expectedActions);
    })
    it('should execute setHasMore', () => {
      const expectedActions = [
        {
          'payload': true,
          'type': 'pokemon/SET_HAS_MORE',
        },
      ];

      store.dispatch(pokemonActions.setHasMore(true));
      expect(store.getActions()).toMatchSnapshot();
      expect(store.getActions()).toEqual(expectedActions);
    })

    it('should execute fetch data', (done) => {
      const getDataPokemonList = getPokemons
      getDataPokemonList()
      .then(response, () => done())
      .catch('error', () => done.fail());
    });
  
    it('returns an object.', () => {
      return getPokemons(url)
        .then(({ data }) => expect(typeof data).toEqual('object'));
    });
  });
  

  // it('should execute fetch data', () => {

  //   const 
  
  //   // Return the promise
  //   return store.dispatch(pokemonActions.getDataPokemonList())

  //     .then(() => {
  //       const actions = store.getActions()
  //       expect(actions[0]).toEqual(success())
  //     })
  // })

});
