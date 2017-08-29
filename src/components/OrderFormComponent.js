import React, { Component } from 'react';

import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';

export default class OrderFormComponent extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);

    // initiliaze the state
    this.state = {
      hasValidationErrors: 0
    };
  }

  _handleSubmit(event) {
    event.preventDefault();
    const $form = event.target;

    const name = $form.name.value.trim();
    const address = $form.address.value.trim();
    const phone = $form.phone.value.trim();

    let phoneValid = false;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    phoneValid = phone.match(phoneno);

    console.log('Phone Valid? ' + phoneValid);
    if (name !== '' && address !== '' && phoneValid !== '' && phoneValid !== null) {
      console.log('You Da Man');

      // setState to be false for no errors
      this.setState({ hasValidationErrors: false });
      this.props.onSubmitOrderForm({ name, phone, address });
    } else {
      // setState to be true for errors
      this.setState({ hasValidationErrors: true });
      console.log('nope');
    }
  } // end of function

  render() {
    console.log('CURRENT STATE: ' + this.state.hasValidationErrors);

    // if (this.state.hasValidationErrors || this.state.hasValidationErrors === 0) {
    return (
      <form onSubmit={this._handleSubmit} id="orderForm" className="OrderFormComponent">
        {/* // key={item.id}> */}
        <div className="row">
          <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <input id="icon_prefix" type="text" name="name" />
            <label className="icon_prefix">
              {/* {item.name} */}
            </label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">phone</i>
            <input id="icon_telephone" type="tel" name="phone" />
            {/* // className="validate" pattern="\d{3}[\-]\d{3}[\-]\d{4}" required /> */}
            <label className="icon_telephone">
              {/* {item.phone} */}
            </label>
          </div>
          <div className="input-field">
            <i className="material-icons prefix">home</i>
            <input type="text" id="address" name="address" />
            <label className="address">
              {/* {item.address} */}
            </label>
          </div>
          <div className="center-align">
            <button id="orderButton" className="btn waves-effect waves-light" type="submit" name="action">
              PLACE ORDER
            </button>
          </div>
          {this.state.hasValidationErrors ? <p>NOTVALID </p> : null}
        </div>
      </form>
    );
    // } else {
    //   return (
    //     <OrderSuccessMessageComponent //
    //       onCloseOrderSuccessMessage={this.props.onCloseOrderSuccessMessage}
    //     />
    //   );
    //   // end of return
    // }
  } // end of render
} // end of Class

// export default function OrderFormComponent({ onSubmitOrderForm = () => {} }) {
//   function handleSubmit(event) {
//     event.preventDefault();
//     const $form = event.target;
//
//     const name = $form.name.value.trim();
//     const address = $form.address.value.trim();
//     const phone = $form.phone.value.trim();
//
//     // console.log('name: ' + name);
//     // console.log('phone: ' + phone);
//     // console.log('address: ' + address);
//     let phoneValid = false;
//     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//
//     phoneValid = phone.match(phoneno);
//
//     console.log('Phone Valid? ' + phoneValid);
//     if (name !== '' && address !== '' && phoneValid !== '' && phoneValid !== null) {
//       console.log('You Da Man');
//
//       onSubmitOrderForm({ name, phone, address });
//     } else {
//       console.log('nope');
//     }
//   }
//
//   return (
//     <form onSubmit={handleSubmit} id="orderForm" className="OrderFormComponent">
//       {/* // key={item.id}> */}
//       <div className="row">
//         <div className="input-field">
//           <i className="material-icons prefix">account_circle</i>
//           <input id="icon_prefix" type="text" name="name" />
//           <label className="icon_prefix">
//             {/* {item.name} */}
//           </label>
//         </div>
//
//         <div className="input-field">
//           <i className="material-icons prefix">phone</i>
//           <input id="icon_telephone" type="tel" name="phone" />
//           {/* // className="validate" pattern="\d{3}[\-]\d{3}[\-]\d{4}" required /> */}
//           <label className="icon_telephone">
//             {/* {item.phone} */}
//           </label>
//         </div>
//
//         <div className="input-field">
//           <i className="material-icons prefix">home</i>
//           <input type="text" id="address" name="address" />
//           <label className="address">
//             {/* {item.address} */}
//           </label>
//         </div>
//
//         <div className="center-align">
//           <button id="orderButton" className="btn waves-effect waves-light" type="submit" name="action">
//             PLACE ORDER
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }
