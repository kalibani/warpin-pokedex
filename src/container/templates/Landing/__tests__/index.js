// Test Landing Component
// --------------------------------------------------------

import React from 'react';
import Landing from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Landing,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
