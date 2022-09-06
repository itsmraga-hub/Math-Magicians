import React from 'react';
import './css/App.css';

import CalculatorComponent from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <CalculatorComponent />
      </div>
    );
  }
}
