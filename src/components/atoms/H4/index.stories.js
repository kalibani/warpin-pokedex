// Stories H4 Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import H4 from './index';
import Notes from './readme.md';

storiesOf('Atoms', module).add('H4', () => (
  <H4 />
), {
  info: { inline: true, header: false, text: Notes }
});
