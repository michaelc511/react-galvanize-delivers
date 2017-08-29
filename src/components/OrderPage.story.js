import React from 'react';
import { storiesOf } from '@storybook/react';

import OrderPageLayout from './OrderPageLayout';

import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';

// import './OrderPageLayout.story.css';
let items = [
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
];

storiesOf('OrderPage', module) //
  .add('OrderPage', () =>
    <OrderPageLayout>
      <MenuComponent items={items} />
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
      <OrderFormComponent
        item={{
          id: 1,
          name: 'Nestor Toro',
          phone: '(650) 533-8676',
          address: '123 Main Street, Oakland, CA'
        }}
      />
    </OrderPageLayout>
  );
