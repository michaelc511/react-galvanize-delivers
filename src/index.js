import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import OrderPage from './components/OrderPage';

// import OrderPageLayout from './components/OrderPageLayout';
//
// import MenuComponent from './components/MenuComponent';
// import OrderTableComponent from './components/OrderTableComponent';
// import OrderFormComponent from './components/OrderFormComponent';

let menuItems = [
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

let orderItems = [
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
];

let customerInfo = {
  id: 1,
  name: 'Nestor Toro',
  phone: '(650) 533-8676',
  address: '123 Main Street, Oakland, CA'
};

ReactDOM.render(
  <OrderPage //
    menuItems={menuItems}
    orderItems={orderItems}
    customerInfo={customerInfo}
  />,
  document.getElementById('root')
);
