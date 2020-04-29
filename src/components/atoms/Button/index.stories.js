// Stories Button Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';
import Notes from './readme.md';

storiesOf('Atoms', module).add('Button', () => (
<Button />
), {
info: { inline: true, header: false, text: Notes },
}
);
