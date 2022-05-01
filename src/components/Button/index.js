import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Button = ({
  btnSize,
  btnType,
  btnText,
  onClickCallback,
  ...additionalProps
}) => {
  return (
    <button
      className={`${styles.btnGeneralStyles} ${styles[btnSize]} ${styles[btnType]}`}
      onClick={onClickCallback}
      {...additionalProps}
    >
      {btnText}
    </button>
  );
};

Button.propTypes = {
  btnSize: PropTypes.oneOf(["small", "large"]).isRequired,
  btnType: PropTypes.oneOf(["Cancel", "Submit", "Search", "Primary"])
    .isRequired,
  btnText: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
};

export default Button;
