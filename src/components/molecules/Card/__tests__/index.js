// Test Card Component
// --------------------------------------------------------

import React from 'react';
import Card from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Card,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
