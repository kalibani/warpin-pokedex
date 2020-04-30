// Test FormText Component
// --------------------------------------------------------

import React from 'react';
import FormText from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
FormText,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
