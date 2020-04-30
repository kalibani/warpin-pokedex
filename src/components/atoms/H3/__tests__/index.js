// Test H3 Component
// --------------------------------------------------------

import React from 'react';
import H3 from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
H3,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
