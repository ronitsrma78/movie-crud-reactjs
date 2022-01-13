import "./styles.css";
import { movies } from "./data";
import React from "react";

import EditModal from "./EditModal";
import AddModal from "./AddModal";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      movie: null,
      openModal: false,
      openAddModal: false
    };
  }

  handleEdit = (movie) => {
    //console.log(movie);
    this.setState({
      openModal: true,
      movie: movie
    });
  };

  handleSave = (id, title, genre) => {
    //console.log("click handel save");
    //console.log(title);

    const tempMovies = this.state.movies;
    //console.log(tempMovies);

    const updatedMovies = tempMovies.map((movie) => {
      if (movie.id == id) {
        movie.title = title;
        movie.genre = genre;
      }

      return movie;
    });

    this.setState({
      movies: updatedMovies,
      openModal: false
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false
    });
  };

  handleDelete = (id) => {
    const tempMovies = this.state.movies;
    const updatedMovies = tempMovies.filter((movie) => movie.id !== id);
    this.setState({
      movies: updatedMovies
    });
  };

  addMovieHandler = (title, genre) => {
    const newMovie = {
      id: Math.floor(Math.random() * 10000),
      title,
      genre
    };

    const tempMovies = this.state.movies;
    tempMovies.push(newMovie);

    this.setState({
      movies: tempMovies,
      openAddModal: false
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <button onClick={() => this.setState({ openAddModal: true })}>
            Add Movie
          </button>
          {this.state.openAddModal ? (
            <AddModal
              addMovieHandler={this.addMovieHandler}
              closeModal={() => this.setState({ openAddModal: false })}
            />
          ) : null}
          <table>
            <thead>
              <tr>
                <th>Id </th>
                <th> Title </th>
                <th> Genre </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => {
                return (
                  <tr>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>
                      <button onClick={() => this.handleEdit(movie)}>
                        Edit
                      </button>
                      <button onClick={() => this.handleDelete(movie.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {this.state.openModal ? (
          <EditModal
            movie={this.state.movie}
            handleSave={this.handleSave}
            closeModal={this.closeModal}
          />
        ) : null}
      </>
    );
  }
}

export default App;
