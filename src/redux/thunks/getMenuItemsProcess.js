import getMenuItems from '../../requests/getMenuItems';

export default function getMenuItemProcess() {
  return (dispatch, getState) => {
    return getMenuItems().then(menuItems => {
      // use 'store' to call 'dispatch'
      //console.log(menuItems);
      dispatch({ type: 'GET_MENU_ITEMS', menuItems });
      return menuItems;
    });
  };
}
