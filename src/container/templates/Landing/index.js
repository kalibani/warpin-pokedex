// Landing Component
// --------------------------------------------------------

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import classname from 'classnames';
import {
  Header, Hero, Card, Placeholder
} from 'components';
import './styles.scss';

const Landing = ({ isLoading, pokemonList, isScrolled }) => {
  const classNames = classname('t-landing');

  return (
    <>
      <Header className={isScrolled ? 'nav-up' : ''} />
      <main className={classNames}>
        <div className="landing-content">
          <Hero />
          {
            isLoading && (
              <Placeholder />
            )
          }
          <div className="container">
            <div className="row row-cols-5">
              {
                pokemonList.map((element, index) => (
                  <div key={index}>
                    <Card
                      isLoading={isLoading}
                      srcSet={element.data.sprites.front_default}
                      src={element.data.sprites.back_shiny || element.data.sprites.front_default || element.data.sprites.back_default}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

Landing.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  pokemonList: PropTypes.array.isRequired,
  isScrolled: PropTypes.bool.isRequired
};


export default memo(Landing);
