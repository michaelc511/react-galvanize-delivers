import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItemComponent from './MenuItemComponent';
import MenuComponent from './MenuComponent';

/*
Phase 3-A

MenuItemComponent Tests
The item's name gets rendered
The item's price gets rendered
The onAddItem callback gets triggered when you click on the "Add to Order" button/link
Note: Shallow rendering should be sufficient
Also, write a snapshot test for MenuItemComponent using Jest.

MenuComponent tests
Verify the expected number of MenuItemComponents are rendered based
on the number of items that are passed into MenuComponent

The onAddItem callback gets triggered when you click on one of the "Add to Order" buttons
*/

const onAddItem = itemId => {
  console.log(`This is the itemID!!! ${itemId}`);
};

const item = { name: 'Some Item A', price: 9.99, imagePath: '//via.placeholder.com/300x200' };

const menuItems = [
  {
    name: 'Smoked Swine',
    price: 8.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 1
  },
  {
    name: 'Royale with Cheese',
    price: 11.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 2
  },
  {
    name: 'Arugula Pie',
    price: 14.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 3
  },
  {
    name: 'Ice Cream Biscuit',
    price: 7.99,
    imagePath: '//via.placeholder.com/300x200',
    id: 4
  }
];

// // 3A Shallow test for name and price are rendered
// describe('a shallow test', () => {
//   const shallowWrapper = shallow(<MenuItemComponent onAddItem={onAddItem} item={item} />);
//
//   it('should have item name and price gets rendered  ', () => {
//     console.log('test');
//     console.log(shallowWrapper);
//     expect(
//       shallowWrapper.contains(
//         <h5>
//           {item.name || 'N/A'}
//         </h5>
//       )
//     ).toBe(true);
//
//     //expect(shallowWrapper.find('item')).toHaveLength(1);
//   });
//
//   it('should have item   price gets rendered  ', () => {
//     console.log('test');
//     console.log(shallowWrapper);
//     expect(
//       shallowWrapper.contains(
//         <p>
//           {item.price || 'N/A'}
//         </p>
//       )
//     ).toBe(true);
//
//     //expect(shallowWrapper.find('item')).toHaveLength(1);
//   });
// });

// 3A render tests using 'mount'
describe('full render tests', () => {
  const fullWrapper = mount(<MenuItemComponent onAddItem={onAddItem} item={item} />);
  it('should test the props of the component', () => {
    expect(fullWrapper.props().item).toEqual(item);
  });
  it("should test the item' name gets rendered ", () => {
    expect(fullWrapper.props().item.name).toEqual(item.name);
  });

  it("should test the item' price gets rendered ", () => {
    expect(fullWrapper.props().item.price).toEqual(item.price);
  });
});

// 3A onAddItem using 'shallow'
describe('a shallow test on event', () => {
  const shallowWrapper = shallow(<MenuItemComponent onAddItem={onAddItem} item={item} />);

  // the onAddItem callback gets triggered when you click on the "Add to Order" button/link
  it('should test if onAddItem function was fired', () => {
    const onAddItem = jest.fn();

    mount(<MenuItemComponent onAddItem={onAddItem} item={item} />).find('.menuChoice').simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });

  expect(shallowWrapper).toMatchSnapshot();
});

// 3A
//Verify the expected number of MenuItemComponents are rendered based on the number of items that are passed into MenuComponent
//The onAddItem callback gets triggered when you click on one of the "Add to Order" buttons
describe(' tests for MenuComponent', () => {
  it('tests children elemenets with full rendering', () => {
    expect(mount(<MenuComponent items={menuItems} />).children()).toHaveLength(4);
  });

  // the onAddItem callback gets triggered when you click on the "Add to Order" button/link
  it('should test if onAddItem function was fired', () => {
    const onAddItem = jest.fn();

    mount(<MenuItemComponent onAddItem={onAddItem} item={item} />).find('.menuChoice').simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });
});
