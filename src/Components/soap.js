import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Carousal from "./Carousal";

class Soap extends Component {
  state = {
    loading: true,
    count: 1,
    link: "",
  };

  componentDidMount = () => {
    axios
      .get(
        // `https://api.themoviedb.org/3/trending/tv/day?api_key=9bbcbda12cd8e24c3b0faccb7cff4370`
        `https://api.themoviedb.org/3/tv/popular?api_key=9bbcbda12cd8e24c3b0faccb7cff4370&language=en-US&page=${this.state.count}`
      )
      .then((data) => {
        console.log("data: ", data);

        this.props.dispatch({
          type: "SET_MOVIE",
          payload: data.data.results,
        });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState !== this.state) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=9bbcbda12cd8e24c3b0faccb7cff4370&language=en-US&page=${this.state.count}`
        )
        .then((data) => {
          console.log("data: ", data);

          this.props.dispatch({
            type: "SET_MOVIE",
            payload: data.data.results,
          });
        });
    }
  };

  stateCount = () => {
    var stateCount = this.state.count;
    this.setState(
      {
        count: stateCount + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  };

  showMovie = (movieId) => {};

  render() {
    if (this.props.movies) {
      var movies = this.props.movies.map((movie) => {
        return (
          <div class="card my-2" style={{ width: "17rem" }}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              class="card-img-top"
              alt="Movie Icon"
              style={{ maxHeight: "22rem" }}
              onClick={() => {
                this.props.history.push(`/soap/${movie.id}`);
              }}
            />
          </div>
        );
      });
    }
    return (
      <div>
        <Carousal />
        <div className="container">
          <h1 className="my-4">Latest Soaps</h1>
          <div className="d-flex flex-wrap flex-start justify-content-around">
            {movies}
          </div>
          <button
            onClick={this.stateCount}
            style={{ marginLeft: "47%" }}
            className="btn btn-outline-primary"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    movies: state.movie,
  };
};

export default connect(mapStateToProps)(withRouter(Soap));
