import React from 'react';

export default function OrderTableComponent({ items }) {
  const subTotal = items
    .reduce(function(sum, item) {
      return (sum += item.price);
    }, 0)
    .toFixed(2);

  const tax = (0.085 * subTotal).toFixed(2);

  const total = (parseFloat(subTotal) + parseFloat(tax)).toFixed(2);

  return (
    <table id="orderTable" className="striped OrderTableComponent">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => {
          console.log('ITEM ID: ' + item.id + i);
          return (
            <tr key={i}>
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
