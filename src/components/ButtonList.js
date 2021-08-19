import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const ButtonList = (props) => {
  const digits = [
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
  ];

  const functionsKeys = [
    { value: 'AC', className: 'key' },
    { value: '+/-', className: 'key' },
    { value: '%', className: 'key' },
  ];

  const operatorsKeys = [
    { value: '÷', className: 'key' },
    { value: 'x', className: 'key key-multiply' },
    { value: '-', className: 'key' },
    { value: '+', className: 'key' },
    { value: '=', className: 'key' },
  ];

  const createNumberKeyPad = React.useMemo(() => {
    const { handleClick } = props;

    const numberKeyPad = digits.map((btn) => (
      <Button
        key={btn.value}
        value={btn.value}
        className={btn.className}
        handleClick={handleClick}
      />
    ));

    return numberKeyPad;
  });

  const createFunctionKeyPad = React.useMemo(() => {
    const { handleClick } = props;
    const functionKeyPad = functionsKeys.map((btn) => (
      <Button
        key={btn.value}
        value={btn.value}
        className={btn.className}
        handleClick={handleClick}
      />
    ));

    return functionKeyPad;
  });

  const createOperatorsKeyPad = React.useMemo(() => {
    const { handleClick } = props;
    const operatorsKeyPad = operatorsKeys.map((btn) => (
      <Button
        key={btn.value}
        value={btn.value}
        className={btn.className}
        handleClick={handleClick}
      />
    ));

    return operatorsKeyPad;
  });

  return (
    <>
      <div className="keypad">
        <div className="input-keys">
          <div className="function-keys">
            {createFunctionKeyPad}
          </div>
          <div className="digit-keys">
            {createNumberKeyPad}
          </div>
        </div>
        <div className="operator-keys">
          {createOperatorsKeyPad}
        </div>
      </div>
    </>
  );
};

export default ButtonList;

ButtonList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
