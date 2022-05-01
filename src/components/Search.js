import React from "react";
import PropTypes from "prop-types";

const Search = ({ setSearchKeyword }) => {
  return (
    <div className="header-container">
      <ul>
        <input type="text" onChange={(e) => setSearchKeyword(e.target.value)} />
      </ul>
    </div>
  );
};

Search.propTypes = {
  setSearchKeyword: PropTypes.func.isRequired,
};

export default Search;
