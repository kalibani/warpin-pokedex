// Test H4 Component
// --------------------------------------------------------

import React from 'react';
import H4 from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
H4,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
