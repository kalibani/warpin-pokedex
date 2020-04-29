// Stories Input Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';
import Notes from './readme.md';

storiesOf('Atoms', module).add('Input', () => (
  <Input />
), {
  info: { inline: true, header: false, text: Notes }
});
