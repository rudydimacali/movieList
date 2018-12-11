import React, { Component } from "react";

var AddMovieContainer = props => {
  return (
    <div id="addMovieContainer">
      <input type="text" id="addMovie" onKeyDown={props.handleEnter} />
      <button type="submit" id="addMovieButton" onClick={props.handleClick}>
        Add Movie
      </button>
    </div>
  );
};

export default AddMovieContainer;
