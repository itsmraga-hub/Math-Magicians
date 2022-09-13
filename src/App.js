import React from 'react';
import './css/App.css';

import CalculatorComponent from './components/Calculator';
import Header from './components/Header';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="welcomeContainer">
            <h1>Let&apos;s do some Math</h1>
          </div>
          <CalculatorComponent />
        </div>
      </>
    );
  }
}
