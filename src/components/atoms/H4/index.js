// H4 Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const H4 = ({ propsName }) => (
  <tag>
    Functional Component (Stateless Component)
  </tag>
);

H4.propTypes = {
  propsName: PropTypes.string
};

H4.defaultProps = {
  propsName: ''
};

export default H4;
