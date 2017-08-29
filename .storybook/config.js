import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  // Require your stories here...

  // 1 MenuItemComponent
  require('../src/components/MenuItemComponent.story');

  // 2 MenuComponent
  require('../src/components/MenuComponent.story');

  // 3 OrderTableComponent
  require('../src/components/OrderTableComponent.story');

  // 4 OrderFormComponent
  require('../src/components/OrderFormComponent.story');

  // 5 OrderPageLayout
  require('../src/components/OrderPageLayout.story');

  // 6 OrderPage
  require('../src/components/OrderPage.story');

  // 7 OrderSuccessMessageComponent
  require('../src/components/OrderSuccessMessageComponent.story');
}
configure(loadStories, module);
