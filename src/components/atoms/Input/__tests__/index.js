// Test Input Component
// --------------------------------------------------------

import React from 'react';
import Input from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Input,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
