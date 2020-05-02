// Test H2 Component
// --------------------------------------------------------

import React from 'react';
import H2 from '../../index';
import renderer from 'react-test-renderer';

test('H2 is match the snapshot', () => {
const component = renderer.create(
H2,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
