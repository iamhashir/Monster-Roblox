import React from "react";
import "./searchBox.css"
const Search = ({placeholder , onchang}) => {
  return (
    <div className="search">
      <input
        className="bsdka"
        type="search"
        placeholder={placeholder}
        onChange={onchang}
      />
    </div>
  );
};

export default Search;
