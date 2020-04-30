/* eslint-disable react/button-has-type */
// Button Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Button = ({
  className,
  style,
  variant,
  family,
  tabIndex,
  onClick,
  disabled,
  full,
  type,
  children
}) => {
  const classNames = classname('a-button', className, variant, family, {
    'full-content': full
  });
  return (
    <>
      <button
        className={classNames}
        type={type}
        onClick={onClick}
        tabIndex={tabIndex}
        style={style}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.string,
  family: PropTypes.string,
  tabIndex: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node
};

Button.defaultProps = {
  className: '',
  style: {},
  variant: '',
  family: '',
  tabIndex: '0',
  onClick: () => {},
  disabled: false,
  full: false,
  children: '',
  type: 'button'
};

export default Button;
