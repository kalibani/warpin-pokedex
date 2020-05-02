// Test Placeholder Component
// --------------------------------------------------------

import React from 'react';
import Placeholder from '../../index';
import renderer from 'react-test-renderer';

test('Placeholder is match the snapshot', () => {
const component = renderer.create(
Placeholder,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
