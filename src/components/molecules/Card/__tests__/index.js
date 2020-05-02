// Test Card Component
// --------------------------------------------------------

import React from 'react';
import Card from '../index';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { H4 } from 'components/atoms';

const shallowSetup = () => {
  // Sample props to pass to our shallow render
  const props = {
    srcSet: 'https://dummy-url',
    src:'https://dummy-url',
    className: '',
    name: 'name',
    height: 0,
    weight: 0,
    types: [],
    abilities: [],
    statistics: []
  }
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<Card {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('<Card />', () => {
  it('should render a card with the props', () => {
    // Setup wrapper and assign props.
    const { enzymeWrapper, props } = shallowSetup();
    
    expect(enzymeWrapper.find('img').hasClass('lazy image-card')).toBe(true);
    // expect(enzymeWrapper.find(<H4></H4>).children()).toBe(props.name);
    // expect(enzymeWrapper.find('div.card-info-wrapper.div').children()).toBe(props.types);
    // expect(enzymeWrapper.find('div.card-info-wrapper.div').children).toBe(props.abilities);
    // expect(enzymeWrapper.find('div.card-info-wrapper').children).toBe(props.statistics);
    // expect(enzymeWrapper.containsMatchingElement(<div> Abilities</div>)).toBe(true);
  });
});


