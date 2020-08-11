import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

class SingleMoviePage extends Component {
  state = {
    url: this.props.match.params.id,
    loading: true,
    data: null,
  };
  componentDidMount = async () => {
    console.log(this.state.url);
    try {
      const movie = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.state.url}?api_key=9bbcbda12cd8e24c3b0faccb7cff4370&language=en-US`
      );
      console.log("movie data: ", movie);
      this.setState({
        ...this.state,
        loading: false,
        data: movie.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="mb-5">
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <div>
            <div
              style={{
                width: "100%",
                height: "80vh",
                overflowY: "scroll",
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.73)),
  url(https://image.tmdb.org/t/p/w1280/${this.state.data.backdrop_path})`,

                backgroundSize: "cover",
                background: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                style={{
                  transform: "translateY(25rem)",
                  color: "white",
                  overflow: "hidden",
                  maxHeight: "20rem",
                }}
              >
                {" "}
                <h1 className="text-center" style={{ color: "white" }}>
                  {this.state.data.title}
                </h1>
                <h5 className="d-none d-xl-block col-md-8 offset-2 text-center mt-5">
                  {this.state.data.tagline}
                </h5>
              </div>
            </div>
            <div className="container">
              <div className="my-5">
                <h1>OVERVIEW</h1>
              </div>
              <div className="row" style={{ marginTop: "50px" }}>
                <div className="col-7">
                  <p className="lead">{this.state.data.overview}</p>
                  <div className="row" style={{ marginTop: "90px" }}>
                    <div className="col-4">
                      <div>
                        <div>
                          <h5
                            style={{
                              fontWeight: "bolder",
                              color: "grey",
                              fontSize: "1rem",
                            }}
                          >
                            RELEASE YEAR
                          </h5>
                        </div>
                        <div
                          style={{
                            fontWeight: "bolder",
                            fontSize: "1.8rem",
                            marginTop: "0.6rem",
                          }}
                        >
                          {this.state.data.release_date}
                        </div>
                      </div>
                      <div className="mt-5">
                        <div>
                          <h5
                            style={{
                              fontWeight: "bolder",
                              color: "grey",
                              fontSize: "1rem",
                            }}
                          >
                            GENRE
                          </h5>
                        </div>
                        <div
                          style={{
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            marginTop: "0.6rem",
                          }}
                        >
                          {this.state.data.genres.map((item) => {
                            return <li>{item.name}</li>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <div>
                          <h5
                            style={{
                              fontWeight: "bolder",
                              color: "grey",
                              fontSize: "1rem",
                            }}
                          >
                            BUDGET
                          </h5>
                        </div>
                        <div
                          style={{
                            fontWeight: "bolder",
                            fontSize: "1.8rem",
                            marginTop: "0.6rem",
                          }}
                        >
                          $ {this.state.data.budget / 1000000} M
                        </div>
                      </div>
                      <div className="my-5">
                        <div>
                          <h5
                            style={{
                              fontWeight: "bolder",
                              color: "grey",
                              fontSize: "1rem",
                            }}
                          >
                            RUNTIME
                          </h5>
                        </div>
                        <div
                          style={{
                            fontWeight: "bolder",
                            fontSize: "1.8rem",
                            marginTop: "0.6rem",
                          }}
                        >
                          {this.state.data.runtime} min
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <div>
                          <h5
                            style={{
                              fontWeight: "bolder",
                              color: "grey",
                              fontSize: "1rem",
                            }}
                          >
                            RATING
                          </h5>
                        </div>
                        <div
                          style={{
                            fontWeight: "bolder",
                            fontSize: "1.8rem",
                            marginTop: "0.6rem",
                          }}
                        >
                          {this.state.data.vote_average}
                        </div>
                        <div className="mt-5">
                          <h5
                            style={{
                              fontWeight: "bolder",
                              color: "grey",
                              fontSize: "1rem",
                            }}
                          >
                            REVENUE
                          </h5>
                        </div>
                        <div
                          style={{
                            fontWeight: "bolder",
                            fontSize: "1.8rem",
                            marginTop: "0.6rem",
                          }}
                        >
                          $ {Math.ceil(this.state.data.revenue / 1000000)} M
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 offset-1">
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={`https://image.tmdb.org/t/p/w1280/${this.state.data.poster_path}`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SingleMoviePage);
