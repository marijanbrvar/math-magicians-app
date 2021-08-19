import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handleClick, value } = this.props;
    handleClick(value);
  }

  render() {
    const { value, className } = this.props;
    return (
      <button
        type="button"
        className={className}
        onClick={this.handleClick}
      >
        {value}
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
