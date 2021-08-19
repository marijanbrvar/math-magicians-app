/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import AutoScalingText from './AutoScalingText';

const Display = (props) => {
  const { display } = props;

  function handleChange(e) {
    e.target.value = display;
  }

  return (
    <div className="calc-display" onChange={handleChange}>
      <AutoScalingText>{display}</AutoScalingText>
    </div>
  );
};

Display.propTypes = {
  display: PropTypes.string.isRequired,
};

Display.defaultProp = {
  value: '0',
};

export default Display;
