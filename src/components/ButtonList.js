import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from './Button';

class ButtonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digits: [
        { value: '0', className: 'key key-0' },
        { value: '.', className: 'key key-dot' },
        { value: '1', className: 'key' },
        { value: '2', className: 'key' },
        { value: '3', className: 'key' },
        { value: '4', className: 'key' },
        { value: '5', className: 'key' },
        { value: '6', className: 'key' },
        { value: '7', className: 'key' },
        { value: '8', className: 'key' },
        { value: '9', className: 'key' },
      ],
      functionsKeys: [
        { value: 'AC', className: 'key' },
        { value: '+/-', className: 'key' },
        { value: '%', className: 'key' },
      ],
      operatorsKeys: [
        { value: '÷', className: 'key' },
        { value: 'x', className: 'key key-multiply' },
        { value: '-', className: 'key' },
        { value: '+', className: 'key' },
        { value: '=', className: 'key' },
      ],
    };
  }

  render() {
    const { handleClick } = this.props;
    const { digits, functionsKeys, operatorsKeys } = this.state;
    const numberKeyPad = digits.map((btn) => (
      <Button
        key={btn.value}
        value={btn.value}
        className={btn.className}
        handleClick={handleClick}
      />
    ));

    const functionKeyPad = functionsKeys.map((btn) => (
      <Button
        key={btn.value}
        value={btn.value}
        className={btn.className}
        handleClick={handleClick}
      />
    ));

    const operatorsKeyPad = operatorsKeys.map((btn) => (
      <Button
        key={btn.value}
        value={btn.value}
        className={btn.className}
        handleClick={handleClick}
      />
    ));

    return (
      <>
        <div className="keypad">
          <div className="input-keys">
            <div className="function-keys">
              {functionKeyPad}
            </div>
            <div className="digit-keys">
              {numberKeyPad}
            </div>
          </div>
          <div className="operator-keys">
            {operatorsKeyPad}
          </div>
        </div>
      </>
    );
  }
}

export default ButtonList;

ButtonList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
