// Card Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { H4 } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

const Card = ({ title, content, fontAwesome }) => {
  const classNames = classname('m-card');
  return (
    <div className={classNames}>
      <div className="o-card-header">
        <H4>
          {title}
        </H4>
        <FontAwesomeIcon icon={fontAwesome} />
      </div>
      <p className="card-content">
        {content}
      </p>
    </div>

  );
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  fontAwesome: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

Card.defaultProps = {
  title: '',
  content: '',
  fontAwesome: ''
};

export default Card;
