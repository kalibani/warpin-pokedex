// Test H1 Component
// --------------------------------------------------------

import React from 'react';
import H1 from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
H1,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
