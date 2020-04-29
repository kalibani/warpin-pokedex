// Stories H1 Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import H1 from './index';
import Notes from './readme.md';

storiesOf('Atoms', module).add('H1', () => (
  <H1 />
), {
  info: { inline: true, header: false, text: Notes }
});
