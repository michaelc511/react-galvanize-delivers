import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';

import './MenuItemComponent.story.css';

storiesOf('MenuItemComponent', module) //
  .add('Happy Path', () =>
    <MenuItemComponent
      item={{
        id: 1,
        name: 'Some Item A',
        price: 9.99,
        imagePath: '//via.placeholder.com/300x200'
      }}
    />
  ) //
  .add('Incomplete w No Price', () =>
    <MenuItemComponent
      item={{
        id: 2,
        name: 'Some Item A',
        imagePath: '//via.placeholder.com/300x200'
      }}
    />
  ) //
  .add('Invalid Price ', () =>
    //
    <MenuItemComponent
      item={{
        id: 3,
        name: 'Some Item A',
        price: '9.99',
        imagePath: '//via.placeholder.com/300x200'
      }}
    />
  ) //
  .add('Empty item', () =>
    //
    <MenuItemComponent item={{}} />
  ) //
  .add('No Item Passed In', () =>
    //
    <MenuItemComponent />
  );
