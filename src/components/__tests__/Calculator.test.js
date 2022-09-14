import React from 'react';
import renderer from 'react-test-renderer';

import CalculatorComponent from '../Calculator';

it('<CalculatorComponent /> Renders properly', () => {
  const tree = renderer.create(<CalculatorComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
