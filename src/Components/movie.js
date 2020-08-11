import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Carousal from "./Carousal";

class Movie extends Component {
  state = {
    loading: true,
    count: 1,
  };

  componentDidMount = () => {
    axios
      .get(
        `https://api.themoviedb.org/4/list/${this.state.count}?page=1&api_key=9bbcbda12cd8e24c3b0faccb7cff4370`
      )
      .then((data) => {
        console.log("data at component did mount: ", data);

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
          `https://api.themoviedb.org/4/list/${this.state.count}?page=1&api_key=9bbcbda12cd8e24c3b0faccb7cff4370`
        )
        .then((data) => {
          console.log("data at component did update: ", data);

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
                this.props.history.push(`/movie/${movie.id}`);
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
          <h1 className="my-4">Latest Movies</h1>
          <div className="d-flex flex-wrap flex-start justify-content-around ">
            {movies}
          </div>
          <div className="text-center">
            <button
              onClick={this.stateCount}
              className="btn btn-outline-primary center"
            >
              Next
            </button>
          </div>
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

export default connect(mapStateToProps)(withRouter(Movie));
