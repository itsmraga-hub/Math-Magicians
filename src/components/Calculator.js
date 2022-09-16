import React, { useState } from 'react';
import calculate from '../logic/calculate';

import ButtonPrimary from './ButtonPrimary';
// import ButtonSecondary from './ButtonSecondary';
import Screen from './Screen';

const CalculatorComponent = () => {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const buttons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  const getButtonValue = (e) => {
    const calc = calculate(state, e.target.innerText);
    setState({ ...state, ...calc });
  };

  return (
    <div className="calculatorContainer">
      <Screen value={state.total || ''} />
      <Screen value={state.next || state.operation || ''} />
      {
        buttons.map((btn, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ButtonPrimary key={i} name={btn} getButtonValue={getButtonValue} />
        ))
      }
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
