import React from 'react';
import MenuItemComponent from './MenuItemComponent';

import './MenuComponent.story.css';

export default function MenuComponent({ items, onAddItem }) {
  //
  if (items && Array.isArray(items)) {
    return (
      <div className="menuItems MenuComponent">
        {items.map((
          item //
        ) =>
          <MenuItemComponent
            key={item.id} //
            item={item} //
            onAddItem={onAddItem}
          />
        )}
      </div>
    );
  } else {
    return <div>Loading...the stuff</div>;
  }
}
