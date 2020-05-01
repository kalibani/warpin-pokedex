/* eslint-disable import/no-cycle */
// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

import { H4, Placeholder } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

const Card = ({
  srcSet, src, fontAwesome, className
}) => {
  const animatiom = !src ? 'animation' : '';
  const classNames = classname('m-card', className);
  return (
    <div className={classNames}>
      <div className={`card-image-wrapper ${animatiom}`}>
        {
          src ? (
            <img
              className="lazy image-card"
              srcSet={srcSet}
              src={src}
              alt="card-images"
            />
          ) : (
            <div>
              No Image Availabe
            </div>
          )
        }
      </div>
    </div>

  );
};

Card.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  className: PropTypes.string,
  fontAwesome: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  isLoading: PropTypes.bool
};

Card.defaultProps = {
  src: '',
  srcSet: '',
  fontAwesome: '',
  className: '',
  isLoading: false
};

export default Card;
