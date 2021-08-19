import PropTypes from 'prop-types';

const Button = (props) => {
  const { value, className, handleClick } = props;

  function clickHandler() {
    handleClick(value);
  }

  return (
    <button
      type="button"
      className={className}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Button;
