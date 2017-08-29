import React from 'react';
import { storiesOf } from '@storybook/react';

import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';

// import './OrderPageLayout.story.css';

storiesOf('OrderSuccessMessageComponent', module) //
  .add('OrderSuccessMessageComponent', () =>
    <OrderSuccessMessageComponent
      customerInfo={{
        name: 'name',
        phone: '555',
        address: 'address'
      }}
      onClose={() => {}}
    />
  );
