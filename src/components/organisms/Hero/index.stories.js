// Stories Hero Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './index';
import Notes from './readme.md';

storiesOf('Organisms', module).add('Hero', () => (
  <Hero />
), {
  info: { inline: true, header: false, text: Notes }
});
