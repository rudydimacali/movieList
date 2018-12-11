import React, { Component } from "react";
import FormContainer from "./FormContainer";
import SearchContainer from "./SearchContainer";
import AddMovieContainer from "./AddMovieContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: "",
      moviesAdded: [
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
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleEnterSearch = this.handleEnterSearch.bind(this);
    this.handleEnterAddMovie = this.handleEnterAddMovie.bind(this);
    this.handleClickAddMovie = this.handleClickAddMovie.bind(this);
  }
  addMovie(movieName) {
    let duplicateExists = this.state.moviesAdded.filter(movie => {
      if (movie.title.toLowerCase() === movieName) {
        return movie;
      }
    });
    if (!duplicateExists.length) {
      let newMoviesAdded = this.state.moviesAdded.concat({ title: movieName });
      this.setState({
        moviesAdded: newMoviesAdded,
        movies: newMoviesAdded
      });
    }
  }
  searchMovies(searchQuery) {
    event.preventDefault();
    let movieResults = this.state.moviesAdded.filter(movie => {
      if (movie.title.toLowerCase().includes(searchQuery)) {
        return movie;
      }
    });
    this.setState({ movies: movieResults });
  }
  handleClickAddMovie(event) {
    event.preventDefault();
    let newMovieName = document.getElementById("addMovie").value;
    this.addMovie(newMovieName);
  }
  handleEnterAddMovie(event) {
    if (event.keyCode === 13) {
      let newMovieName = document.getElementById("addMovie").value;
      this.addMovie(newMovieName);
    }
  }
  handleClickSearch(event) {
    event.preventDefault();
    let searchQuery = document.getElementById("search").value;
    this.searchMovies(searchQuery);
  }
  handleEnterSearch(event) {
    if (event.keyCode === 13) {
      let searchQuery = document.getElementById("search").value;
      this.searchMovies(searchQuery);
    }
  }
  render() {
    return (
      <div>
        <AddMovieContainer
          moviesAdded={this.state.moviesAdded}
          handleClick={this.handleClickAddMovie}
          handleEnter={this.handleEnterAddMovie}
        />
        <SearchContainer
          movie={this.state.movieTitle}
          movieList={this.state.movies}
          handleClick={this.handleClickSearch}
          handleEnter={this.handleEnterSearch}
        />
        <FormContainer movieList={this.state.movies} />
      </div>
    );
  }
}

export default App;
