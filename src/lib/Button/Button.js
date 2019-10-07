/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ text }) => {
  return (
    <button
      className="button"
      type="button"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
