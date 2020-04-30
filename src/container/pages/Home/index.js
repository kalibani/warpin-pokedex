// Home Component
// --------------------------------------------------------

import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Button } from 'components';
import Landing from 'container/templates/Landing';
import { getDataPokemonList } from 'stores/actions/pokemon';
import './styles.scss';

const Home = ({ propsName }) => {
  const dispatch = useDispatch();
  const getPokemons = useCallback(
    () => dispatch(getDataPokemonList()),
    [dispatch]
  );

  useEffect(() => {
    getPokemons();
  }, []);
  const classNames = classname('p-home');
  return (

    <div className={classNames}>
      <Landing />
    </div>
  );
};

Home.propTypes = {
  propsName: PropTypes.string
};

Home.defaultProps = {
  propsName: ''
};

export default (Home);
