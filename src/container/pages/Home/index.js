// Home Component
// --------------------------------------------------------

import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import classname from 'classnames';
import { Placeholder } from 'components';
import Landing from 'container/templates/Landing';
import { getDataPokemonList } from 'stores/actions/pokemon';
import './styles.scss';

const Home = () => {
  const [isScrolled, setScrolled] = useState(false);

  const { hasMore, isLoading, pokemonList } = useSelector(({ pokemon }) => ({
    pokemonList: pokemon.pokemonList,
    isLoading: pokemon.isLoading,
    hasMore: pokemon.hasMore
  }), shallowEqual);
  const dispatch = useDispatch();
  const getPokemons = useCallback(
    () => dispatch(getDataPokemonList()),
    [dispatch]
  );

  const handleScroll = () => {
    if (window.scrollY >= 143) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);
  const classNames = classname('p-home');
  const length = pokemonList.length > 0 && pokemonList.length;
  return (
    <div className={classNames}>
      <InfiniteScroll
        dataLength={length}
        next={getPokemons}
        hasMore={hasMore}
        onScroll={handleScroll}
        loader={<Placeholder />}
      >
        <Landing
          isScrolled={isScrolled}
          isLoading={isLoading}
          pokemonList={pokemonList}
        />
      </InfiniteScroll>
    </div>
  );
};

export default (Home);
