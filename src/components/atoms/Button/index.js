// Button Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ propsName }) => (
<tag>
  Functional Component (Stateless Component)
</tag>
);

Button.propTypes = {
propsName: PropTypes.string,
};

Button.defaultProps = {
propsName: '',
};

export default Button;
