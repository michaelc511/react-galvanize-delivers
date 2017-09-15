import rootReducer from './rootReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

describe('rootReducer', () => {
  it('action.type GET_MENU_ITEMS', () => {
    const action = {
      type: 'GET_MENU_ITEMS',
      menuItems: [...data.menuItems]
    };

    const currentState = {
      customerInfo: null,
      orderItems: [],
      menuItems: null
    };

    deepFreeze(currentState);

    const nextState = {
      customerInfo: null,
      orderItems: [],
      menuItems: action.menuItems
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

  // start of test
  it('action.type SUBMIT_ORDER', () => {
    const action = {
      type: 'SUBMIT_ORDER',
      customerInfo: { name: 'Mike', phone: '555-555-5555', address: 'Oakland' }
    };

    const currentState = {
      customerInfo: null,
      orderItems: [],
      menuItems: null
    };

    deepFreeze(currentState);

    const nextState = {
      customerInfo: action.customerInfo,
      orderItems: [],
      menuItems: null
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

  // start of test
  it('action.type START_NEW_ORDER', () => {
    // action order items and customer info is to be blank
    const action = {
      type: 'START_NEW_ORDER',
      orderItems: [],
      customerInfo: null
    };

    // current state we have customer and order ifno
    const currentState = {
      customerInfo: { name: 'Mike', phone: '555-555-5555', address: 'Oakland' },
      orderItems: [...data.menuItems]
    };

    deepFreeze(currentState);

    // next state should have null for customer info and orderItems
    const nextState = {
      customerInfo: null,
      orderItems: []
    };

    ////console.log('test');
    // console.log(currentState);
    // console.log(rootReducer(currentState, action));
    // console.log('next');
    // console.log(nextState);
    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test

  // start of test
  it('action.type ADD_ORDER_ITEM', () => {
    // action pass the itemId2 for ordered item
    const action = {
      type: 'ADD_ORDER_ITEM',
      itemId2: data.menuItems[0].id
    };

    // current state we have null for order items
    const currentState = {
      customerInfo: null,
      orderItems: [],
      menuItems: [...data.menuItems]
    };

    deepFreeze(currentState);

    // console.log('test');
    // console.log(data.menuItems[0].id);
    // console.log(data.menuItems[0]);
    // next state should have menu object in orderItems
    const nextState = {
      orderItems: [data.menuItems[0]],
      customerInfo: null,
      menuItems: [...data.menuItems]
    };
    // console.log('test --------------------');
    // console.log(currentState);
    // console.log(rootReducer(currentState, action));
    // console.log('next');
    // console.log(nextState);

    expect(rootReducer(currentState, action)).toEqual(nextState);
  }); // end of test
});
