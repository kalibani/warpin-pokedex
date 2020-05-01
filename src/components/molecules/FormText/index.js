/* eslint-disable import/no-cycle */
// FormText Component
// --------------------------------------------------------

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classname from 'classnames';
import { Input, Button } from 'components';
import { searchPokemonByTypes, setKeyword } from 'stores/actions/pokemon';

import './styles.scss';

const FormText = ({
  id, name, className, value
}) => {
  const dispatch = useDispatch();
  const searchByTypes = useCallback((e) => {
    e.preventDefault();
    dispatch(searchPokemonByTypes());
  }, [dispatch]);

  const handleChange = useCallback(({ target: { value } }) => dispatch(setKeyword(value)), [dispatch]);
  const classNames = classname('m-form-text');

  return (
    <div className={classNames}>
      <div className="form-text-wrapper">
        <form id="form" onSubmit={searchByTypes}>
          <Input
            id={id}
            name={name}
            type="text"
            placeholder="Search for a types of Pokemon......"
            value={value}
            className={className}
            onChange={handleChange}
          />
          <Button
            type="submit"
            className="button-form-text"
          >
            <span>
              Search
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
};

FormText.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default FormText;
