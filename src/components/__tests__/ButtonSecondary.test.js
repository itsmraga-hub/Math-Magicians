import React from 'react';
import renderer from 'react-test-renderer';

import ButtonSecondary from '../ButtonSecondary';

const obj = {
  name: '=',
  getButtonValue: () => true,
};

it('<ButtonSecondary /> Renders properly', () => {
  const { name, getButtonValue } = obj;
  const tree = renderer.create(<ButtonSecondary
    name={name}
    getButtonValue={getButtonValue}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
