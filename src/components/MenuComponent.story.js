import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuComponent from './MenuComponent';

storiesOf('MenuComponent', module).add('Happy path', () =>
  <MenuComponent
    items={[
      {
        id: 1,
        name: 'Some Item A',
        price: 9.99,
        imagePath: '//via.placeholder.com/300x200'
      },
      {
        id: 2,
        name: 'Some Item B',
        price: 8.99,
        imagePath: '//via.placeholder.com/300x200'
      },
      {
        id: 3,
        name: 'Some Item C',
        price: 7.99,
        imagePath: '//via.placeholder.com/300x200'
      },
      {
        id: 4,
        name: 'Some Item D',
        price: 6.99,
        imagePath: '//via.placeholder.com/300x200'
      }
    ]}
  />
);
