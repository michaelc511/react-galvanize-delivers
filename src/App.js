import React, { Component } from 'react';

// 4C
// 1 ) import { Provider } from 'react-redux';

import { Provider } from 'react-redux';

// 2) Add setUpStore
import setupStore from './redux/setupStore';

// 3) Add OrderPageContainer
import OrderPageContainer from './redux/containers/OrderPageContainer';

// 4) Set up store
const store = setupStore();

// 5) REMOVE PROCESS
//import getMenuItemProcess from './redux/thunks/getMenuItemsProcess';

// 6) REMOVE ORDERPAGEITEMS
//import OrderPage from './components/OrderPage';
//import getMenuItems from './requests/getMenuItems';

//
export default class App extends Component {
  // 7) REMOVE constuctor and state mgmt

  // constructor(props) {
  //   super(props);
  //   // set the state in constructor
  //   this.state = {
  //     customerInfo: null,
  //     orderItems: [],
  //     menuItems: null
  //   };
  //
  //   // store subscribe to set state
  //   this.props.store.subscribe(() => {
  //     this.setState(this.props.store.getState());
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <OrderPageContainer />
        </Provider>
      </div>
    );
  }
  // 8) REMOVE ORDERPAGE containder and replace w
  //   <div APP, <Provider w {store}, and <OrderPageContainer />
  // render() {
  //   return (
  //     <OrderPage
  //       menuItems={this.state.menuItems}
  //       orderItems={this.state.orderItems}
  //       customerInfo={this.state.customerInfo}
  //       onAddItem={this._addItem}
  //       onSubmitOrderForm={this._submitOrderForm}
  //       onCloseOrderSuccessMessage={this._closeOrderSuccessMessage}
  //     />
  //   );
  // } // end of render

  // 9) REMOVE ALL FUNCTIONS
  ////FUNCTIONS /////////////////////////
  // componentDidMount() {
  //   this.props.store.dispatch(getMenuItemProcess());
  //   // getMenuItems().then(menuItems => {
  //   //   // use 'store' to call 'dispatch'
  //   //   //console.log(menuItems);
  //   //   this.props.store.dispatch({ type: 'GET_MENU_ITEMS', menuItems });
  //   //   // this.setState({
  //   //   //   // array of Objects
  //   //   //   menuItems
  //   //   // });
  //   // });
  // }

  // _submitOrderForm = ({ name, phone, address }) => {
  //   // use 'store' to call 'dispatch'
  //   this.props.store.dispatch({ type: 'SUBMIT_ORDER', customerInfo: { name, phone, address } });
  //   //this.setState({ customerInfo: { name, phone, address } });
  // };

  // _closeOrderSuccessMessage = () => {
  //   // use 'store' to call 'dispatch'
  //   this.props.store.dispatch({ type: 'START_NEW_ORDER', orderItems: [], customerInfo: null });
  //
  //   // this.setState({
  //   //   orderItems: []
  //   // });
  //
  //   // this.setState({
  //   //   customerInfo: null
  //   // });
  // };
  //
  // _addItem = itemId => {
  //   // use 'store' to call 'dispatch'
  //   this.props.store.dispatch({
  //     type: 'ADD_ORDER_ITEM',
  //     //payload: this.state.menuItems.find(item => item.id === itemId),
  //     itemId2: itemId
  //   });
  //   // this.setState(prevState => {
  //   //   return {
  //   //     orderItems: [
  //   //       ...prevState.orderItems, //
  //   //       prevState.menuItems.find(item => item.id === itemId)
  //   //     ]
  //   //   };
  //   // });
  // };
}
