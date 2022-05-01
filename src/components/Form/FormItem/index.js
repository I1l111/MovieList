import React from "react";

import PropTypes from "prop-tpes";

import "./styles.module.scss";

const FormInput = ({ placeholder, type, initialValue, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={initialValue}
      onChange={onChange}
    />
  );
};

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email"]),
  initialValue,
  onChange,
};

export default FormInput;
