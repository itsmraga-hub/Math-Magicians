import React from 'react';
import calculate from '../logic/calculate';

import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import Screen from './Screen';

export default class CalculatorComponent extends React.Component {
  digits = '';

  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  updateScreen = () => {
    this.setState({ value: this.digits });
  }

  updateScreenAnswer = (obj) => {
    this.setState(obj);
  }

  getButtonValue = (e) => {
    const digit = e.target.innerText;
    const calculator = calculate(this.state, digit);
    this.updateScreenAnswer(calculator);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculatorContainer">
        <Screen value={total || ''} />
        <Screen value={next || operation || ''} />
        <ButtonPrimary name="AC" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="+/-" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="%" getButtonValue={this.getButtonValue} />
        <ButtonSecondary name="÷" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="7" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="8" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="9" getButtonValue={this.getButtonValue} />
        <ButtonSecondary name="x" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="4" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="5" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="6" getButtonValue={this.getButtonValue} />
        <ButtonSecondary name="-" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="1" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="2" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="3" getButtonValue={this.getButtonValue} />
        <ButtonSecondary name="+" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="0" getButtonValue={this.getButtonValue} />
        <ButtonPrimary name="." getButtonValue={this.getButtonValue} />
        <ButtonSecondary name="=" getButtonValue={this.getButtonValue} />
      </div>
    );
  }
}
