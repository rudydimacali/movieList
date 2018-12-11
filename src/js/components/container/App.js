import React, { Component } from "react";
import FormContainer from "./FormContainer";
import SearchContainer from "./SearchContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: "",
      sampleMovies: [
        { title: "Mean Girls" },
        { title: "Hackers" },
        { title: "The Grey" },
        { title: "Sunshine" },
        { title: "Ex Machina" }
      ],
      movies: [
        { title: "Mean Girls" },
        { title: "Hackers" },
        { title: "The Grey" },
        { title: "Sunshine" },
        { title: "Ex Machina" }
      ]
    };
    this.searchMovies = this.searchMovies.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  searchMovies(searchQuery) {
    event.preventDefault();
    let movieResults = this.state.sampleMovies.filter(movie => {
      if (movie.title.toLowerCase().includes(searchQuery)) {
        return movie;
      }
    });
    this.setState({ movies: movieResults });
  }
  handleClick(event) {
    event.preventDefault();
    let searchQuery = document.getElementById("search").value;
    this.searchMovies(searchQuery);
  }
  handleEnter(event) {
    if (event.keyCode === 13) {
      let searchQuery = document.getElementById("search").value;
      this.searchMovies(searchQuery);
    }
  }
  render() {
    return (
      <div>
        <SearchContainer
          movie={this.state.movieTitle}
          movieList={this.state.movies}
          handleClick={this.handleClick}
          handleEnter={this.handleEnter}
        />
        <FormContainer movieList={this.state.movies} />
      </div>
    );
  }
}

export default App;
