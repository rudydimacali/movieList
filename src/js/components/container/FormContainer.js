import React, { Component } from "react";

var FormContainer = props => {
  return (
    <div>
      <ul>
        {props.movieList.map(movie => {
          return <li key={movie.title}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default FormContainer;
