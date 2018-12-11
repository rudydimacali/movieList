import React, { Component } from "react";

var SearchContainer = props => {
  return (
    <div id="searchContainer">
      <input type="search" id="search" onKeyDown={props.handleEnter} />
      <button type="submit" id="searchButton" onClick={props.handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchContainer;
