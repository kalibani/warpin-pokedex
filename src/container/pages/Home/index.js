// Home Component
// --------------------------------------------------------

import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Button } from 'components';
import Landing from 'container/templates/Landing';
import { getDataPokemonList } from 'stores/actions/pokemon';
import './styles.scss';

const Home = ({ propsName }) => {
  const { data, isLoading } = useSelector(({ pokemon }) => ({
    data: pokemon.data,
    isLoading: pokemon.isLoading
  }), shallowEqual);
  const dispatch = useDispatch();
  const increment = useCallback(
    () => dispatch(getDataPokemonList()),
    [dispatch]
  );
  const classNames = classname('p-home');
  return (

    <div className={classNames}>
      <div className="home-content">
        <Button onClick={increment}>
          Click Me

          times
        </Button>
        {/* {
          isLoading && ( */}
        <div>
          <Landing />
        </div>
        {/* )
        } */}
      </div>
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
