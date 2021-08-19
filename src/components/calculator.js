/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import { Component } from 'react';
import BonusList from './ButtonList';
import Display from './Display';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { display, click } = this.props;
    return (
      <>
        <div className="calc">
          <Display display={display} />
          <BonusList handleClick={click} />
        </div>
      </>
    );
  }
}

Calculator.propTypes = {
  display: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
