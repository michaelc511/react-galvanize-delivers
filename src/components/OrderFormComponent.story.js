import React from 'react';
import { storiesOf } from '@storybook/react';
import OrderFormComponent from './OrderFormComponent';

import './OrderFormComponent.story.css';

storiesOf('OrderFormComponent', module) //
  .add('Happy path', () =>
    <OrderFormComponent
      item={{
        id: 1,
        name: 'Nestor Toro',
        phone: '(650) 533-8676',
        address: '123 Main Street, Oakland, CA'
      }}
    />
  );

// storiesOf('OrderFormComponent', module) //
//   .add('Happy path', () => {
//     let customer = {
//       id: 1,
//       name: 'Nestor Toro',
//       phone: '(650) 533-8676',
//       address: '123 Main Street, Oakland, CA'
//     };
//     return <OrderFormComponent item={customer} />;
//   });
