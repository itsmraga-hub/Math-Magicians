import React from 'react';
import renderer from 'react-test-renderer';

import ButtonPrimary from '../ButtonPrimary';

const obj = {
  name: '+',
  getButtonValue: () => true,
};

it('<ButtonPrimary /> Renders properly', () => {
  const { name, getButtonValue } = obj;
  const tree = renderer.create(<ButtonPrimary
    name={name}
    getButtonValue={getButtonValue}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
