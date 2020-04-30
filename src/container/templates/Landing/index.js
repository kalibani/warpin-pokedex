// Landing Component
// --------------------------------------------------------

import React, { memo } from 'react';
// import { shallowEqual, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Header, Hero } from 'components';
import './styles.scss';

const Landing = ({ propsName }) => {
  const classNames = classname('t-landing');
  return (
    <>
      <Header />
      <main className={classNames}>
        <div className="landing-content">
          <Hero />
        </div>
      </main>
    </>
  );
};

Landing.propTypes = {
  propsName: PropTypes.string
};

Landing.defaultProps = {
  propsName: ''
};

export default memo(Landing);
