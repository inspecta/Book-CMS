import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnName, btnValue }) => (
  <button type="submit" className={btnName}>
    {btnValue}
  </button>
);

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  btnValue: PropTypes.string.isRequired,
};

export default Button;
