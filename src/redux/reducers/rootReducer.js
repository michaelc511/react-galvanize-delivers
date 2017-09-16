export default function rootReducer(
  // 1 current State
  currentState = {
    customerInfo: null,
    orderItems: [],
    menuItems: null
  },
  action
  //2 action
) {
  switch (action.type) {
    case 'GET_MENU_ITEMS':
      //console.log('GET_MENU_ITEMS');

      return { ...currentState, menuItems: action.menuItems };
    case 'SUBMIT_ORDER':
      //console.log('SUBMIT_ORDER');
      //console.log(action.customerInfo);
      return { ...currentState, customerInfo: action.customerInfo };
    case 'START_NEW_ORDER':
      //console.log('START_NEW_ORDER');
      return { ...currentState, orderItems: [], customerInfo: null };
    case 'ADD_ORDER_ITEM':
      // console.log('ADD_ORDER_ITEM');
      // console.log('1' + action.itemId);
      // console.log('2' + action.itemId2);
      return {
        ...currentState,
        orderItems: [
          ...currentState.orderItems, //
          currentState.menuItems //
            .find(item => item.id === action.itemId2)
        ]
      };

    //return { ...currentState, orderItems: [...currentState.orderItems, action.payload] };
    default:
      return currentState;
  }
}
//console.log
