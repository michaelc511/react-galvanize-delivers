import React from 'react';

/*
// if not defined, show NA
*/

export default function MenuItemComponent({ item, onAddItem }) {
  if (!item) return null;

  /*
   Local defined function
   1. create handleClick function to hande the event
   2. on the <a> add 'onClick = {<function>}
    */
  function handleClick(event) {
    event.preventDefault();
    //console.log('item: ' + item.id);
    //console.log(event);
    // use the prop fuction to use the item ID
    onAddItem(item.id);
  }

  return (
    <div className="card MenuItem MenuItemComponent">
      <div className="card-image">
        <img src={item.imagePath} alt="Nothing" />
      </div>
      <div className="card-content">
        <h5 className="card-title">
          {item.name || 'N/A'}
        </h5>
        <p>
          {item.price && typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : 'N/A'}
        </p>
      </div>
      <div className="card-action">
        <a href="." onClick={handleClick}>
          ADD TO ORDER
        </a>
      </div>
    </div>
  );
}
