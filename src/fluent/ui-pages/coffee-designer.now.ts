import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import coffeeDesignerPage from '../../client/index.html';

export const coffee_designer_ui = UiPage({
  $id: Now.ID['coffee-designer-ui'],
  endpoint: 'x_snc_coffee_desig_designer.do',
  html: coffeeDesignerPage,
  direct: true
});