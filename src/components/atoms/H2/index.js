// H2 Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const H2 = ({ propsName }) => (
  <tag>
    Functional Component (Stateless Component)
  </tag>
);

H2.propTypes = {
  propsName: PropTypes.string
};

H2.defaultProps = {
  propsName: ''
};

export default H2;
