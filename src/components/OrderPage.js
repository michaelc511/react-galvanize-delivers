import React from 'react';

import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';

/* 4C

 1)
 Remove props as parameter
 Pass in an object w
 set up the properties for the state
 set up methods for the props as <method> = () => {}
*/

export default function OrderPage({
  menuItems,
  orderItems,
  customerInfo,
  onAddItem = () => {},
  onSubmitOrderForm = () => {},
  onCloseOrderSuccessMessage = () => {}
}) {
  // 2) Remove 'props.<item>' with just the name
  // console.log('orderitems/custInfo');
  // console.log(orderItems);
  // console.log(customerInfo);
  // console.log(onAddItem);
  return (
    <OrderPageLayout>
      <MenuComponent
        items={menuItems}
        onAddItem={onAddItem} //
      />
      <OrderTableComponent items={orderItems} />
      {!customerInfo
        ? <OrderFormComponent
            onSubmitOrderForm={onSubmitOrderForm} //
            onCloseOrderSuccessMessage={onCloseOrderSuccessMessage}
          />
        : <OrderSuccessMessageComponent //
            onCloseOrderSuccessMessage={onCloseOrderSuccessMessage}
          />}
    </OrderPageLayout>
  );
}

// export default function OrderPage(props) {
//   return (
//     <OrderPageLayout>
//       <MenuComponent
//         items={props.menuItems}
//         onAddItem={props.onAddItem} //
//       />
//       <OrderTableComponent items={props.orderItems} />
//       {!props.customerInfo
//         ? <OrderFormComponent
//             onSubmitOrderForm={props.onSubmitOrderForm} //
//             onCloseOrderSuccessMessage={props.onCloseOrderSuccessMessage}
//           />
//         : <OrderSuccessMessageComponent //
//             onCloseOrderSuccessMessage={props.onCloseOrderSuccessMessage}
//           />}
//     </OrderPageLayout>
//   );
// }
