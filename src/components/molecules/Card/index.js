/* eslint-disable import/no-cycle */
// Card Component
// --------------------------------------------------------

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { H4 } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const Card = ({
  srcSet, src, className, name, height, weight, types, abilities, statistics
}) => {
  const [isShow, setIsShow] = useState(false);
  const handleClickShow = (payload) => {
    setIsShow(payload);
  };
  useEffect(() => {
    window.onmousedown = () => {
      handleClickShow(false);
    };
  });
  const animatiom = !src ? 'animation' : '';
  const classNames = classname('m-card', className);
  return (
    <div className={classNames}>
      <div className="card-clickable" role="presentation" onClick={() => handleClickShow(true)}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
      {
        isShow && (
        <div className="card-clickable-area">
          <FontAwesomeIcon icon={faCaretUp} />
          <H4 className="text-dark text-capitalize">{name}</H4>
          <div className="card-info">
            <div className="card-info-wrapper d-flex justify-content-between">
              <div>Height </div>
              <div>{height}</div>
            </div>
            <div className="card-info-wrapper d-flex justify-content-between">
              <div>Weight </div>
              <div>{weight}</div>
            </div>
            <div className="card-info-wrapper d-flex justify-content-between">
              <div> Types </div>
              <div>
                {
                      types.map((element, index) => (
                        <div className="text-capitalize" key={index}>
                          { element.type.name}
                          <span>,</span>
                        </div>
                      ))
                    }
              </div>
            </div>
            <div className="card-info-wrapper d-flex justify-content-between">
              <div> Abilities </div>
              <div>
                {
                      abilities.map((element, index) => (
                        <div className="text-capitalize" key={index}>
                          { element.ability.name}
                          <span>,</span>
                        </div>
                      ))
                    }
              </div>
            </div>
            <div className="card-info-wrapper">
              <div> Stats :</div>
              {
                    statistics.map((element, index) => (
                      <div className="d-flex justify-content-between" key={index}>
                        <div className="text-capitalize">
                          { element.stat.name}
                        </div>
                        <div className="text-capitalize">
                          { element.base_stat}
                        </div>
                      </div>
                    ))
                  }
            </div>
          </div>
        </div>
        )
      }
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
      <H4 className="text-dark text-capitalize ml-2 mt-3">
        {name}
      </H4>
    </div>

  );
};

Card.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
  types: PropTypes.array,
  abilities: PropTypes.array,
  statistics: PropTypes.array
};

Card.defaultProps = {
  src: '',
  srcSet: '',
  className: '',
  name: '',
  height: 0,
  weight: 0,
  types: [],
  abilities: [],
  statistics: []
};

export default Card;
