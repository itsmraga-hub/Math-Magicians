import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class CalculatorComponent extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calculatorContainer">
        <span className="grid-span-full grid-item screen" />
        <span className="grid-span-full grid-item screen" />
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">AC</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">+/-</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">%</button>
        <button type="button" className="btn btn-secondary grid-item" data-id="" data-attribute="">÷</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">7</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">8</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">9</button>
        <button type="button" className="btn btn-secondary grid-item" data-id="" data-attribute="">x</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">4</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">5</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">6</button>
        <button type="button" className="btn btn-secondary grid-item" data-id="" data-attribute="">-</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">1</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">2</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">3</button>
        <button type="button" className="btn btn-secondary grid-item" data-id="" data-attribute="">+</button>
        <button type="button" className="btn btn-primary grid-item span-2" data-id="" data-attribute="">0</button>
        <button type="button" className="btn btn-primary grid-item" data-id="" data-attribute="">.</button>
        <button type="button" className="btn btn-secondary grid-item" data-id="" data-attribute="">=</button>
      </div>
    );
  }
}
