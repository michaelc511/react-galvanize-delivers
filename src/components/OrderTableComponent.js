import React from 'react';

export default function OrderTableComponent({ items }) {
  const subTotal = items.reduce(function(sum, item) {
    return (sum += item.price);
  }, 0);

  const tax = (0.085 * subTotal).toFixed(2);

  const total = parseFloat(subTotal) + parseFloat(tax);
  //
  return (
    <table id="orderTable" className="striped OrderTableComponent">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td colSpan="2">
            <i id="orderTable-emptyMessage">Please select some items from the menu</i>
          </td>
        </tr> */}
        {items.map(item => {
          return (
            <tr key={item.id}>
              <td>
                {item.name}
              </td>
              <td>
                {item.price}
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Subtotal</td>
          <td id="orderTable-subtotal">
            ${subTotal}
          </td>
        </tr>
        <tr>
          <td>Tax</td>
          <td id="orderTable-tax">
            ${tax}
          </td>
        </tr>
        <tr>
          <td>Total</td>
          <td id="orderTable-total">
            ${total}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
