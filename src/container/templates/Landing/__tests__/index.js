// Test Landing Component
// --------------------------------------------------------

import React from 'react';
import Landing from '../index';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import {
  Header, Hero
} from 'components';
const shallowSetup = () => {
  // Sample props to pass to our shallow render
  const props = {
    isLoading: false,
    pokemonList: [],
    isScrolled: false
  }

  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<Landing {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('<Landing />', () => {
  it('should render a Landing with the props', () => {
    // Setup wrapper and assign props.
    const { enzymeWrapper, props } = shallowSetup();
    expect(enzymeWrapper.containsMatchingElement(<Header className={props.isScrolled ? 'nav-up' : ''} />)).toBe(true);
    expect(enzymeWrapper.containsMatchingElement(<Hero />)).toBe(true);
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});


