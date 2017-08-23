import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderTableComponent from './OrderTableComponent';

import './OrderTableComponent.story.css';

storiesOf('OrderTableComponent', module) //
  .add('Happy path', () =>
    //
    <OrderTableComponent
      items={[
        {
          id: 2,
          name: 'Some Item B',
          price: 8.99,
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
