// Landing Component
// --------------------------------------------------------

import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import classname from 'classnames';
import { Header, Hero, Card } from 'components';
import './styles.scss';

const Landing = () => {
  const { isLoading, pokemonList } = useSelector(({ pokemon }) => ({
    pokemonList: pokemon.pokemonList
  }), shallowEqual);

  const classNames = classname('t-landing');
  return (
    <>
      <Header />
      <main className={classNames}>
        <div className="landing-content">
          <Hero />
          <div className="container">
            <div className="row">
              {
                !isLoading && pokemonList.length > 0 && pokemonList.map((element, index) => (
                  <div className="col-md-3" key={index}>
                    <Card
                      srcSet={element.data.sprites.front_default}
                      src={element.data.sprites.front_default}
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

export default memo(Landing);
