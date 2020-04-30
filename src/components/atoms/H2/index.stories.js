// Stories H2 Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import H2 from './index';
import Notes from './readme.md';

storiesOf('Atoms', module).add('H2', () => (
  <H2 />
), {
  info: { inline: true, header: false, text: Notes }
});
