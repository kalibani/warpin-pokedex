// Test Hero Component
// --------------------------------------------------------

import React from 'react';
import Hero from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Hero,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
