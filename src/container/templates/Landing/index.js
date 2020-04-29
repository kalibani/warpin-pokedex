// Landing Component
// --------------------------------------------------------

import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classname from 'classnames';
// import { Button } from 'components';
// import { getPokemonList } from 'stores/actions/pokemon';
import './styles.scss';

const Landing = ({ propsName }) => {
  const { data, isLoading } = useSelector(({ pokemon }) => ({
    data: pokemon.data,
    isLoading: pokemon.isLoading
  }), shallowEqual);

  const classNames = classname('p-landing');
  return (

    <div className={classNames}>

      <div className="landing-content">
        im clicked
        {' '}
        {data}
        {' '}
        times
      </div>


    </div>
  );
};

Landing.propTypes = {
  propsName: PropTypes.string
};

Landing.defaultProps = {
  propsName: ''
};

export default (Landing);
