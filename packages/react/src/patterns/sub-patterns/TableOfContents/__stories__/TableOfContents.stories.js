/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import './index.scss';
import { object, select, text, withKnobs } from '@storybook/addon-knobs';
import dataContent from './data/dataContent';
import React from 'react';
import readme from '../README.md';
import { storiesOf } from '@storybook/react';
import TableOfContents from '../TableOfContents';

const _themes = {
  g100: 'g100',
  white: '',
};
storiesOf('Patterns (Sub-Patterns)|Table of Contents', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('Manually define Menu Items', () => {
    const _menuLabel = text('menu label', 'Jump to');

    const menuItems = [
      {
        title: 'Cras molestie condimentum',
        id: '8',
      },
      {
        title: 'Praesent fermentum sodales',
        id: '7',
      },
      {
        title: 'Nulla tristique lacinia',
        id: '2',
      },
      {
        title: 'Morbi id nibh metus',
        id: '3',
      },
      {
        title: 'Integer non scelerisque',
        id: '14',
      },
    ];

    return (
      <TableOfContents
        theme={select('theme', _themes, _themes.white)}
        menuItems={object('menuItems', menuItems)}
        menuLabel={_menuLabel}>
        {dataContent}
      </TableOfContents>
    );
  })
  .add('Dynamic Items', () => {
    const _menuLabel = text('menu label', 'Jump to');

    return (
      <TableOfContents
        theme={select('theme', _themes, _themes.white)}
        menuLabel={_menuLabel}>
        {dataContent}
      </TableOfContents>
    );
  });
