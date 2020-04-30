// Landing Component
// --------------------------------------------------------

import React, { memo } from 'react';
// import { shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Header } from 'components';
// import { getPokemonList } from 'stores/actions/pokemon';
import './styles.scss';

const Landing = ({ propsName }) => {
  const classNames = classname('p-landing');
  return (

    <div className={classNames}>

      <Header />

    </div>
  );
};

Landing.propTypes = {
  propsName: PropTypes.string
};

Landing.defaultProps = {
  propsName: ''
};

export default memo(Landing);