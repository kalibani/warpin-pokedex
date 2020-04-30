// FormText Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FormText = ({ propsName }) => (
  <tag>
    Functional Component (Stateless Component)
  </tag>
);

FormText.propTypes = {
  propsName: PropTypes.string
};

FormText.defaultProps = {
  propsName: ''
};

export default FormText;
