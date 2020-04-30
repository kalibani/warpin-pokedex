/* eslint-disable import/no-cycle */
// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { H4 } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

const Card = ({ srcSet, src, fontAwesome }) => {
  const classNames = classname('m-card');
  return (
    <div className={classNames}>
      <div className="card-image-wrapper">
        <img
          className="lazy image-card"
          srcSet={srcSet}
          src={src}
          alt="card-images"
        />
      </div>
    </div>

  );
};

Card.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  fontAwesome: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

Card.defaultProps = {
  src: '',
  srcSet: '',
  fontAwesome: ''
};

export default Card;
