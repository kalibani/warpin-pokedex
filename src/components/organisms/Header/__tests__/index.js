// Test Header Component
// --------------------------------------------------------

import React from 'react';
import Header from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Header,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
