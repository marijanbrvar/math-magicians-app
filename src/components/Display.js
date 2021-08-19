/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import PropTypes from 'prop-types';
import AutoScalingText from './AutoScalingText';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    const { display } = this.props;
    e.target.value = display;
  }

  render() {
    const { display } = this.props;
    return (
      <div className="calc-display">
        <AutoScalingText>{display}</AutoScalingText>
      </div>
    );
  }
}

Display.propTypes = {
  display: PropTypes.string.isRequired,
};

Display.defaultProp = {
  value: '0',
};

export default Display;
