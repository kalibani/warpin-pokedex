// Home Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Home = ({ propsName }) => (
  <div>
    Hai
    {' '}
    {propsName}
  </div>
);

Home.propTypes = {
  propsName: PropTypes.string
};

Home.defaultProps = {
  propsName: ''
};

export default (Home);
