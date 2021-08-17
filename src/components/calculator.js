/* eslint-disable react/button-has-type */
import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <>
        <div className="calc">
          <div className="calc-display">
            <div className="auto-scaling-text">0</div>
          </div>
          <div className="keypad">
            <div className="input-keys">
              <div className="function-keys">
                <button className="key" onClick="{console.log('C')}">C</button>
                <button className="key" onClick="{console.log('C')}">±</button>
                <button className="key" onClick="{console.log('C')}">%</button>
              </div>
              <div className="digit-keys">
                <button className="key key-0">0</button>
                <button className="key key-dot">●</button>
                <button className="key">1</button>
                <button className="key">2</button>
                <button className="key">3</button>
                <button className="key">4</button>
                <button className="key">5</button>
                <button className="key">6</button>
                <button className="key">7</button>
                <button className="key">8</button>
                <button className="key">9</button>
              </div>
            </div>
            <div className="operator-keys">
              <button className="key">÷</button>
              <button className="key key-multiply">×</button>
              <button className="key">−</button>
              <button className="key">+</button>
              <button className="key">=</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
