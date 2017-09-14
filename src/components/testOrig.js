import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItemComponent from './MenuItemComponent';
import MenuComponent from './MenuComponent';

/*
Phase 3-A

The item's name gets rendered
The item's price gets rendered
The onAddItem callback gets triggered when you click on the "Add to Order" button/link
Note: Shallow rendering should be sufficient
Also, write a snapshot test for MenuItemComponent using Jest.

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

// 3A Shallow test for name and price are rendered
describe('a shallow test', () => {
  const shallowWrapper = shallow(<MenuItemComponent onAddItem={onAddItem} item={item} />);

  // it('should return one React element', () => {
  //   // console.log('PROPS: ');
  //   // console.log(shallowWrapper.props().item);
  //   // console.log('???');
  //   expect(shallowWrapper.props().item).toEqual(item);
  // });
  //
  // it('should console.log the shallowWrapper object', () => {
  //   console.log(shallowWrapper.debug());
  // });

  it('should item name and price gets rendered  ', () => {
    //console.log(shallowWrapper.find({ prop: 'item' }));
    expect(shallowWrapper.find({ prop: 'item' })).toHaveLength(1);
  });

  it('should highlight the .find method', () => {
    // find at one div tag w className 'card-content'
    expect(shallowWrapper.find('div.card-content')).toHaveLength(1);
    // div 'card-content' have 2 childrent
    expect(shallowWrapper.find('div.card-content').children()).toHaveLength(2);
    // none for button w className 'card-content'
    expect(shallowWrapper.find('button.card-content')).toHaveLength(0);
    // have one button
    expect(shallowWrapper.find('button')).toHaveLength(1);
    // total div = 4
    expect(shallowWrapper.find('div')).toHaveLength(4);
  });

  it('checks if the components contains elements in a render tree', () => {
    expect(shallowWrapper.contains(<div className="card-action" />)).toBe(false);
    expect(
      shallowWrapper.contains(
        <p>
          {item.price || 'N/A'}
        </p>
      )
    ).toBe(true);
  });

  it('checks if events were fired', () => {
    expect(shallowWrapper.find('button').simulate('click', { target: { id: { value: 3 } } })).toBeTruthy();
  });
});

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

// describe(' tests for MenuComponent', () => {
//   it('should console.log the shallowWrapper and fullWrapper', () => {
//     console.log(shallow(<MenuComponent items={menuItems} />).debug());
//     console.log(mount(<MenuComponent items={menuItems} />).debug());
//   });
//   it('tests children elemenets with full rendering', () => {
//     expect(mount(<MenuComponent items={menuItems} />).children()).toHaveLength(4);
//   });
//   it('tests against parent and children components', () => {
//     console.log(mount(<MenuComponent items={menuItems} />).find('.card'));
//     expect(mount(<MenuComponent items={menuItems} />).find('.card')).toHaveLength(menuItems.length);
//   });
// });
