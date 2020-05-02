// Test Input Component
// --------------------------------------------------------

import React from 'react';
import Input from '../index';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('<Input />', () => {
  describe('onClick()', () => {
    test('successfully calls the onChange handler and match the snapshot', () => {
      const mockOnChange = jest.fn();
      const wrapper = shallow(
        <Input onChange={mockOnChange}/>
      );

      wrapper.find('input').simulate('change');
      expect(mockOnChange.mock.calls.length).toEqual(1);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});


