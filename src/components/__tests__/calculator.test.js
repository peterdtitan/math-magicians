import React from 'react';
import renderer from 'react-test-renderer';

import Calculator from '../Calculator';

it('renders correctly on the tree', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
