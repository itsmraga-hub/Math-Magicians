import React from 'react';
import renderer from 'react-test-renderer';

import Screen from '../Screen';

it('<Header /> Renders properly', () => {
  const value = '1234';
  const tree = renderer.create(<Screen value={value} />).toJSON();
  expect(tree).toMatchSnapshot();
});
