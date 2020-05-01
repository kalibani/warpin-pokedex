// Stories Placeholder Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Placeholder from './index';
import Notes from './readme.md';

storiesOf('Atoms', module).add('Placeholder', () => (
  <Placeholder />
), {
  info: { inline: true, header: false, text: Notes }
});
