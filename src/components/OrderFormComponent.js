import React from 'react';

export default function OrderFormComponent({ item }) {
  return (
    <form id="orderForm" className="OrderFormComponent" key={item.id}>
      <div className="row">
        <div className="input-field">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" required />
          <label className="icon_prefix">
            {item.name}
          </label>
        </div>

        <div className="input-field">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" pattern="\d{3}[\-]\d{3}[\-]\d{4}" required />
          <label className="icon_telephone">
            {item.phone}
          </label>
        </div>

        <div className="input-field">
          <i className="material-icons prefix">home</i>
          <input type="text" id="address" name="address" className="validate" required />
          <label className="address">
            {item.address}
          </label>
        </div>

        <div className="center-align">
          <button id="orderButton" className="btn waves-effect waves-light" type="submit" name="action">
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
}
