/* eslint-disable import/no-cycle */
// Header Component
// --------------------------------------------------------

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import logo from 'assets/images/pokeapi_256.png';
import './styles.scss';

const Header = ({ className }) => {
  const classNames = classname('o-header', className);
  return (
    <header className={classNames}>
      <div className="header-content">
        <div className="header-content-wrapper">
          <ul>
            <li><a href="/"><img className="header-logo" src={logo} alt="logo" /></a></li>
            <li><a href="/">Movies</a></li>
            <li><a href="/">Games</a></li>
          </ul>
        </div>
        <div className="header-content-wrapper">
          <ul>
            <li><a href="/">Contests</a></li>
            <li><a href="/">Locations</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string
};
Header.defaultProps = {
  className: ''
};

export default memo(Header);
