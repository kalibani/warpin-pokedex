// Stories Header Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Header from './index';
import Notes from './readme.md';

storiesOf('Organisms', module).add('Header', () => (
  <Header />
), {
  info: { inline: true, header: false, text: Notes }
});
