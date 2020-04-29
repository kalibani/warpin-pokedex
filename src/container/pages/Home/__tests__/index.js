// Test Home Component
// --------------------------------------------------------

import React from 'react';
import Home from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Home,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
