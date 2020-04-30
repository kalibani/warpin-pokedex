// Header Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from 'assets/images/pokeapi_256.png';
import './styles.scss';

const Header = ({ title, content, fontAwesome }) => {
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

Header.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  fontAwesome: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

Header.defaultProps = {
  title: '',
  content: '',
  fontAwesome: ''
};

export default Header;
