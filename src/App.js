import React, { Component } from 'react';
import getMenuItemProcess from './redux/thunks/getMenuItemsProcess';

import OrderPage from './components/OrderPage';
import getMenuItems from './requests/getMenuItems';

export default class App extends Component {
  constructor(props) {
    super(props);
    // set the state in constructor
    this.state = {
      customerInfo: null,
      orderItems: [],
      menuItems: null
    };

    // store subscribe to set state
    this.props.store.subscribe(() => {
      this.setState(this.props.store.getState());
    });
  }
  // state = {
  //   //array
  //   customerInfo: null,
  //   orderItems: [],
  //   menuItems: null
  // }; // end of state

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
    this.props.store.dispatch(getMenuItemProcess());
    // getMenuItems().then(menuItems => {
    //   // use 'store' to call 'dispatch'
    //   //console.log(menuItems);
    //   this.props.store.dispatch({ type: 'GET_MENU_ITEMS', menuItems });
    //   // this.setState({
    //   //   // array of Objects
    //   //   menuItems
    //   // });
    // });
  }

  _submitOrderForm = ({ name, phone, address }) => {
    // use 'store' to call 'dispatch'
    this.props.store.dispatch({ type: 'SUBMIT_ORDER', customerInfo: { name, phone, address } });
    //this.setState({ customerInfo: { name, phone, address } });
  };

  _closeOrderSuccessMessage = () => {
    // use 'store' to call 'dispatch'
    this.props.store.dispatch({ type: 'START_NEW_ORDER', orderItems: [], customerInfo: null });

    // this.setState({
    //   orderItems: []
    // });

    // this.setState({
    //   customerInfo: null
    // });
  };

  _addItem = itemId => {
    // use 'store' to call 'dispatch'
    this.props.store.dispatch({
      type: 'ADD_ORDER_ITEM',
      //payload: this.state.menuItems.find(item => item.id === itemId),
      itemId2: itemId
    });
    // this.setState(prevState => {
    //   return {
    //     orderItems: [
    //       ...prevState.orderItems, //
    //       prevState.menuItems.find(item => item.id === itemId)
    //     ]
    //   };
    // });
  };
}
