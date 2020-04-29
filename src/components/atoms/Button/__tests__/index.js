// Test Button Component
// --------------------------------------------------------

import React from 'react';
import Button from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Button,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
