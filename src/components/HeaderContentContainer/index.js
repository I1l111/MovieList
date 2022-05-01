import React from "react";
import PropTypes from "prop-types";

import styles from "./stlyles.module.scss";

const HeaderContentContainer = ({ children }) => {
  return <div className={styles.HeaderContentContainer}>{children}</div>;
};

HeaderContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderContentContainer;
