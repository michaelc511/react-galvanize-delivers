import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// 4C

// 1) REMOVE setupStore
// 2)
//import setupStore from './redux/setupStore';

//const store = setupStore();

//ReactDOM.render(<App store={store} />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// import OrderPage from './components/OrderPage';
//
// let menuItems = [
//   {
//     id: 1,
//     name: 'Burger N Fries',
//     price: 9.99,
//     imagePath: 'http://localhost:3000/images/burger.jpg'
//     // imagePath: '//via.placeholder.com/300x200'
//   },
//   {
//     id: 2,
//     name: 'Veggie Pizza',
//     price: 8.99,
//     imagePath: 'http://localhost:3000/images/pizza.jpg'
//     // imagePath: '//via.placeholder.com/300x200'
//   },
//   {
//     id: 3,
//     name: 'BBQ Ribs',
//     price: 7.99,
//     imagePath: 'http://localhost:3000/images/ribs.jpg'
//     // imagePath: '//via.placeholder.com/300x200'
//   },
//   {
//     id: 4,
//     name: 'Ice Cream Sandwich',
//     price: 6.99,
//     imagePath: 'http://localhost:3000/images/ice_cream.jpg'
//
//     //  imagePath: '//via.placeholder.com/300x200'
//   }
// ];
//
// let customerInfo1 = null;
//
// let orderItems = [];
//
// let onAddItem = function(itemId) {
//   // 1 check if the added itemId === any of the menuItems ID
//   // 2 if YES, then push it to the orderItems[].
//   orderItems.push(menuItems.find(menuItem => menuItem.id === itemId));
//
//   console.log('Order Length: ' + orderItems.length);
//
//   render();
// };
//
// let onSubmitOrderForm = function(customerInfo) {
//   console.log('SUBMIT!');
//   const name = customerInfo.name;
//   const phone = customerInfo.phone;
//   const address = customerInfo.address;
//   customerInfo1 = { name, phone, address };
//   render();
// };
//
// let onCloseOrderSuccessMessage = function() {
//   orderItems = [];
//   customerInfo1 = null;
//   console.log('INDEX ');
//   render();
// };
//
// function render() {
//   ReactDOM.render(
//     <OrderPage //
//       menuItems={menuItems}
//       orderItems={orderItems}
//       customerInfo={customerInfo1}
//       onAddItem={onAddItem}
//       onSubmitOrderForm={onSubmitOrderForm}
//       onCloseOrderSuccessMessage={onCloseOrderSuccessMessage}
//     />,
//     document.getElementById('root')
//   );
// }

// render();
