/* eslint-disable import/no-cycle */
// Hero Component
// --------------------------------------------------------

import React, { memo } from 'react';
import classname from 'classnames';
import { FormText, H1, H2 } from 'components';
import './styles.scss';

const Hero = () => {
  const classNames = classname('o-hero');
  return (
    <div className={classNames}>
      <div className="hero-content">
        <H1>Welcome.</H1>
        <H2 className="hero-text-2">
          Hundreds of pokemons,
          Movie shows and games to discover. Explore now.
        </H2>
        <FormText />
      </div>
    </div>
  );
};

export default memo(Hero);
