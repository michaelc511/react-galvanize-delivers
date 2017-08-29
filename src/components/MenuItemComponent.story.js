import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuItemComponent from './MenuItemComponent';

import './MenuItemComponent.story.css';

const item = {
  id: 1,
  name: 'Some Item A',
  price: 9.99,
  imagePath: '//via.placeholder.com/300x200'
};

storiesOf('MenuItemComponent', module) //
  .add('Happy Path', () =>
    //
    <MenuItemComponent
      item={item} //
      onAddItem={itemId => console.log('hiya 1 ' + itemId)}
      larry={'larry'}
    />
  ) //
  .add('Incomplete w No Price', () =>
    <MenuItemComponent
      item={item}
      onAddItem={itemId => {
        console.log('hiya 2 ' + itemId);
      }}
    />
  ) //
  .add('Invalid Price ', () =>
    //
    <MenuItemComponent
      item={item}
      onAddItem={itemId => {
        console.log('Hiya' + itemId);
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
