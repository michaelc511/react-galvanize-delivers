import getMenuItemsProcess from './getMenuItemsProcess';

jest.mock('../../requests/getMenuItems');

import getMenuItems from '../../requests/getMenuItems';

import data from '../../mock-data';

describe('getMenuItemsProcess', () => {
  it('Calls getMenuItems API utility, returns array of menuItems, and dispatches GET_MENU_ITEMS action', () => {
    const thunk = getMenuItemsProcess();
    expect(typeof thunk).toBe('function');

    getMenuItems.mockReturnValueOnce(Promise.resolve([...data.menuItems]));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(menuItems => {
      expect(getMenuItems).toBeCalled();
      expect(menuItems).toEqual([...data.menuItems]);
      expect(dispatch).toBeCalledWith({ type: 'GET_MENU_ITEMS', menuItems });
    });
  });
});
