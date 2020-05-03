// Test Card Component
// --------------------------------------------------------

import React from 'react';
import Card from '../index';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
const shallowSetup = () => {
  // Sample props to pass to our shallow render
  const props = {
    srcSet: 'https://dummy-url',
    src:'https://dummy-url',
    className: '',
    name: '',
    height: 0,
    weight: 0,
    types: [],
    abilities: [],
    statistics: [],
    isShow: true
  }

  const mockOnClick = jest.fn();
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<Card {...props} onClick={mockOnClick} />);

  return {
    props,
    enzymeWrapper,
    mockOnClick
  };
}

describe('<Card />', () => {
  it('should render a card with the props', () => {
    // Setup wrapper and assign props.
    const { enzymeWrapper, props, mockOnClick } = shallowSetup();
    
    expect(enzymeWrapper.find('img').hasClass('lazy image-card')).toBe(true);
    enzymeWrapper.find('div.card-clickable').simulate('click');
    // expect(mockOnClick.mock.calle.length).toEqual(1);
    expect(enzymeWrapper.find('img').at(0).props().srcSet).toBe(props.srcSet);
    expect(enzymeWrapper.containsMatchingElement(<FontAwesomeIcon icon={faEllipsisH} />)).toBe(true);
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});


