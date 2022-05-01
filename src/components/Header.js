import React from "react";
import PropTypes from "prop-types";
import close from "./images/icon-remove.svg";

const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords(key)}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}
        <a href="#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  );
};

Header.propTypes = {
  keywords: PropTypes.array.isRequired,
  removeKeywords: PropTypes.func.isRequired,
  clearAll: PropTypes.func.isRequired,
};

export default Header;
