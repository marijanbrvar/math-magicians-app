/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import BonusList from './ButtonList';
import Display from './Display';

const Calculator = (props) => {
  const { display, click } = props;

  return (
    <>
      <div className="calc">
        <Display display={display} />
        <BonusList handleClick={click} />
      </div>
    </>
  );
};

Calculator.propTypes = {
  display: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Calculator;
