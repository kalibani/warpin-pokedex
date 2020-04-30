// H3 Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const H3 = ({ propsName }) => (
  <tag>
    Functional Component (Stateless Component)
  </tag>
);

H3.propTypes = {
  propsName: PropTypes.string
};

H3.defaultProps = {
  propsName: ''
};

export default H3;
