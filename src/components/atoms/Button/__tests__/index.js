// Test Button Component
// --------------------------------------------------------

import React from 'react';
import Button from '../index';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('<Button />', () => {
  describe('onClick()', () => {
    test('successfully calls the onClick handler and match the snapshot', () => {
      const mockOnClick = jest.fn();
      const wrapper = shallow(
        <Button onClick={mockOnClick}>Click Me</Button>
      );

      wrapper.find('button').simulate('click');
      expect(mockOnClick.mock.calls.length).toEqual(1);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});


