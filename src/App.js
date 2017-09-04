import React, { Component } from 'react';
import OrderPage from './components/OrderPage';
import getMenuItems from './requests/getMenuItems';

export default class App extends Component {
  state = {
    //array
    customerInfo: null,
    orderItems: [],
    menuItems: null
  }; // end of state

  render() {
    return (
      <OrderPage
        menuItems={this.state.menuItems}
        orderItems={this.state.orderItems}
        customerInfo={this.state.customerInfo}
        onAddItem={this._addItem}
        onSubmitOrderForm={this._submitOrderForm}
        onCloseOrderSuccessMessage={this._closeOrderSuccessMessage}
      />
    );
  } // end of render

  ////FUNCTIONS /////////////////////////
  componentDidMount() {
    getMenuItems().then(menuItems => {
      this.setState({
        // array of Objects
        menuItems
      });
    });
  }

  _submitOrderForm = ({ name, phone, address }) => {
    this.setState({ customerInfo: { name, phone, address } });
  };

  _closeOrderSuccessMessage = () => {
    this.setState({
      orderItems: []
    });

    this.setState({
      customerInfo: null
    });
  };

  _addItem = itemId => {
    this.setState(prevState => {
      return {
        orderItems: [
          ...prevState.orderItems, //
          prevState.menuItems.find(item => item.id === itemId)
        ]
      };
    });
  };
}
