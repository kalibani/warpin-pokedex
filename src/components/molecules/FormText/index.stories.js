// Stories FormText Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import FormText from './index';
import Notes from './readme.md';

storiesOf('Molecules', module).add('FormText', () => (
  <FormText />
), {
  info: { inline: true, header: false, text: Notes }
});
