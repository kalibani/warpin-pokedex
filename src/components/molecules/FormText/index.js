/* eslint-disable import/no-cycle */
// FormText Component
// --------------------------------------------------------

import React, { useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import classname from 'classnames';
import { Input, Button } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import { searchPokemonByTypes, setKeyword } from 'stores/actions/pokemon';


const FormText = () => {
  const { keyword } = useSelector(({ pokemon }) => ({
    keyword: pokemon.keyword
  }), shallowEqual);

  const dispatch = useDispatch();

  const searchByTypes = useCallback((e) => {
    e.preventDefault();
    dispatch(searchPokemonByTypes());
  }, [dispatch]);

  const handleChange = useCallback(({ target: { value } }) => dispatch(setKeyword(value)),
    [dispatch]);
  const classNames = classname('m-form-text');
  return (
    <div className={classNames}>
      <div className="form-text-wrapper">
        <form id="form" onSubmit={searchByTypes}>
          <Input
            id="keyword"
            name="keyword"
            type="text"
            placeholder="Search for a types of Pokemon......"
            value={keyword}
            className="form-control"
            onChange={handleChange}
          />
          <Button
            type="submit"
            className="button-form-text"
          >
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

export default FormText;
