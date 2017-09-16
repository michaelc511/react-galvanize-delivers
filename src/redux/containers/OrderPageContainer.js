// 4C
// 1) import the stuff
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

// 2) import the OrderPage we want to contain
import OrderPage from '../../components/OrderPage';

// 3) import the Processes from the thunks
import getMenuItemsProcess from '../thunks/getMenuItemsProcess';

// 4) mapStateToProps function
function mapStateToProps(state, ownProps) {
  return {
    customerInfo: state.customerInfo,
    orderItems: state.orderItems,
    menuItems: state.menuItems
  };
}
// 5) mapDispatchToProps functionto call the dispatches
// move dispatch from App.js and remove 'this.props.store'
// for private method names '_name', rename them to what is to be passed
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getMenuItemsProcess()),
    onSubmitOrderForm: ({ name, phone, address }) => dispatch({ type: 'SUBMIT_ORDER', customerInfo: { name, phone, address } }),
    onCloseOrderSuccessMessage: () => dispatch({ type: 'START_NEW_ORDER', orderItems: [], customerInfo: null }),
    onAddItem: itemId => dispatch({ type: 'ADD_ORDER_ITEM', itemId2: itemId })
  };
}
// 6) connectToStore
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// 7) onDidMount
const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

// 8) export compose

export default compose(connectToStore, onDidMount)(OrderPage);
