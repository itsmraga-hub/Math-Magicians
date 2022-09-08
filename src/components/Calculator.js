import React, { useState } from 'react';
import calculate from '../logic/calculate';

import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import Screen from './Screen';

const CalculatorComponent = () => {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const getButtonValue = (e) => {
    const calc = calculate(state, e.target.innerText);
    setState({ ...state, ...calc });
  };

  return (
    <div className="calculatorContainer">
      <Screen value={state.total || ''} />
      <Screen value={state.next || state.operation || ''} />
      <ButtonPrimary name="AC" getButtonValue={getButtonValue} />
      <ButtonPrimary name="+/-" getButtonValue={getButtonValue} />
      <ButtonPrimary name="%" getButtonValue={getButtonValue} />
      <ButtonSecondary name="÷" getButtonValue={getButtonValue} />
      <ButtonPrimary name="7" getButtonValue={getButtonValue} />
      <ButtonPrimary name="8" getButtonValue={getButtonValue} />
      <ButtonPrimary name="9" getButtonValue={getButtonValue} />
      <ButtonSecondary name="x" getButtonValue={getButtonValue} />
      <ButtonPrimary name="4" getButtonValue={getButtonValue} />
      <ButtonPrimary name="5" getButtonValue={getButtonValue} />
      <ButtonPrimary name="6" getButtonValue={getButtonValue} />
      <ButtonSecondary name="-" getButtonValue={getButtonValue} />
      <ButtonPrimary name="1" getButtonValue={getButtonValue} />
      <ButtonPrimary name="2" getButtonValue={getButtonValue} />
      <ButtonPrimary name="3" getButtonValue={getButtonValue} />
      <ButtonSecondary name="+" getButtonValue={getButtonValue} />
      <ButtonPrimary name="0" getButtonValue={getButtonValue} />
      <ButtonPrimary name="." getButtonValue={getButtonValue} />
      <ButtonSecondary name="=" getButtonValue={getButtonValue} />
    </div>
  );
};

CalculatorComponent.defaultProps = {
  obj: {
    total: '',
    next: '',
    operation: '',
  },
};

export default CalculatorComponent;
