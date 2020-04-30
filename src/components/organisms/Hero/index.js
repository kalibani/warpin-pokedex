/* eslint-disable import/no-cycle */
// Hero Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { FormText, H1, H2 } from 'components';
import './styles.scss';

const Hero = ({ title, content, fontAwesome }) => {
  const classNames = classname('o-hero');
  return (
    <div className={classNames}>
      <div className="hero-content">
        <H1>
          Welcome.
        </H1>
        <H2 className="hero-text-2">
          Hundreds of pokemons, Movie shows and games to discover. Explore now.
        </H2>
        <FormText />
      </div>
    </div>

  );
};

Hero.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  fontAwesome: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

Hero.defaultProps = {
  title: '',
  content: '',
  fontAwesome: ''
};

export default Hero;
