/* eslint-disable react/no-unescaped-entities */
// Landing Component
// --------------------------------------------------------

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import classname from 'classnames';
import {
  Header, Hero, Card, Placeholder, H3
} from 'components';
import './styles.scss';

const Landing = ({ isLoading, pokemonList, isScrolled }) => {
  const title = "Here's The List";
  const notFoundWord = (
    <>
      <div>Pokemon is Not Found.</div>
      <div>Please Change your Keyword or Refresh The Page...</div>
    </>
  );
  const classNames = classname('t-landing');
  return (
    <>
      <Header className={isScrolled ? 'nav-up' : ''} />
      <main className={classNames}>
        <div className="landing-content">
          <Hero />
          <div className="container">
            <div className="landing-content-title">
              <H3 className="text-dark">
                {
                  pokemonList.length > 0 ? title : notFoundWord
                }
              </H3>
            </div>
            <div className="row row-cols-5">
              {
                pokemonList.map((element, index) => (
                  <div key={index}>
                    <Card
                      isLoading={isLoading}
                      srcSet={element.data.sprites.front_default}
                      src={element.data.sprites.back_shiny || element.data.sprites.front_default || element.data.sprites.back_default}
                      name={element.data.name}
                      height={element.data.height}
                      weight={element.data.weight}
                      types={element.data.types}
                      statistics={element.data.stats}
                      abilities={element.data.abilities}
                    />
                  </div>
                ))
              }
            </div>
          </div>
          {
            isLoading && (
              <Placeholder />
            )
          }
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
