import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import PropType from 'prop-types';
import calculate from '../logic/calculate';

import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import Screen from './Screen';

// export default class CalculatorComponent extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       total: '',
//       next: '',
//       operation: '',
//     };
//   }

//   updateScreenAnswer = (obj) => {
//     this.setState(obj);
//   }

//   getButtonValue = (e) => {
//     const digit = e.target.innerText;
//     const calculator = calculate(this.state, digit);
//     this.updateScreenAnswer(calculator);
//   }

//   render() {
//     const { total, next, operation } = this.state;
//     return (
//       <div className="calculatorContainer">
//         <Screen value={total || ''} />
//         <Screen value={next || operation || ''} />
//         <ButtonPrimary name="AC" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="+/-" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="%" getButtonValue={this.getButtonValue} />
//         <ButtonSecondary name="÷" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="7" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="8" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="9" getButtonValue={this.getButtonValue} />
//         <ButtonSecondary name="x" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="4" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="5" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="6" getButtonValue={this.getButtonValue} />
//         <ButtonSecondary name="-" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="1" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="2" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="3" getButtonValue={this.getButtonValue} />
//         <ButtonSecondary name="+" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="0" getButtonValue={this.getButtonValue} />
//         <ButtonPrimary name="." getButtonValue={this.getButtonValue} />
//         <ButtonSecondary name="=" getButtonValue={this.getButtonValue} />
//       </div>
//     );
//   }
// }

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

// CalculatorComponent.PropType = {
//   obj: PropType.object,
// };

export default CalculatorComponent;
