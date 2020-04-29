// Input Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = ({ propsName }) => (
  <tag>
    Functional Component (Stateless Component)
  </tag>
);

Input.propTypes = {
  propsName: PropTypes.string
};

Input.defaultProps = {
  propsName: ''
};

export default Input;
