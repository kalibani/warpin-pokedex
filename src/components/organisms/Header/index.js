// Header Component
// --------------------------------------------------------

import React, { memo } from 'react';
import classname from 'classnames';
import logo from 'assets/images/pokeapi_256.png';
import './styles.scss';

const Header = () => {
  const classNames = classname('o-header');
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
            <li><a href="/">Movies</a></li>
            <li><a href="/">Games</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
