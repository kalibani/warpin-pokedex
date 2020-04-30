// Stories H3 Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import H3 from './index';
import Notes from './readme.md';

storiesOf('Atoms', module).add('H3', () => (
  <H3 />
), {
  info: { inline: true, header: false, text: Notes }
});
