import React from 'react';

import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';

export default function OrderPage(props) {
  return (
    <OrderPageLayout>
      <MenuComponent
        items={props.menuItems}
        onAddItem={props.onAddItem} //
      />
      <OrderTableComponent items={props.orderItems} />
      {!props.customerInfo
        ? <OrderFormComponent
            onSubmitOrderForm={props.onSubmitOrderForm} //
            onCloseOrderSuccessMessage={props.onCloseOrderSuccessMessage}
          />
        : <OrderSuccessMessageComponent //
            onCloseOrderSuccessMessage={props.onCloseOrderSuccessMessage}
          />}
    </OrderPageLayout>
  );
}
