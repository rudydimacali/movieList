import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormContainer from "./FormContainer";
import SearchContainer from "./SearchContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: "",
      movies: [
        { title: "Mean Girls" },
        { title: "Hackers" },
        { title: "The Grey" },
        { title: "Sunshine" },
        { title: "Ex Machina" }
      ]
    };
  }
  render() {
    return (
      <div>
        <SearchContainer
          movie={this.state.movieTitle}
          movieList={this.state.movies}
        />
        <FormContainer movieList={this.state.movies} />
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("movie-list");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
