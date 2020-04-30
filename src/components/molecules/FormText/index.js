/* eslint-disable import/no-cycle */
// FormText Component
// --------------------------------------------------------

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Input, Button } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const FormText = ({ title, content, fontAwesome }) => {
  const [keyword, setKeyword] = useState('');
  const classNames = classname('m-form-text');
  const handleChange = (e) => {
    console.warn('iniii', e.target.value);
    setKeyword(e.target.value);
  };
  return (
    <div className={classNames}>
      <div className="form-text-wrapper">
        <form>
          <Input
            id="form-text"
            type="text"
            placeholder="Search for a types of Pokemon......"
            value={keyword}
            className="form-control"
            onChange={handleChange}
          />
          <Button className="button-form-text">
            <span>
              Search
            </span>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </form>
      </div>
    </div>

  );
};

FormText.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  fontAwesome: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
};

FormText.defaultProps = {
  title: '',
  content: '',
  fontAwesome: ''
};

export default FormText;
