import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        {" "}
        <nav class="navbar navbar-expand-md navbar-light bg-light">
          <Link to="/" class="navbar-brand" style={{ color: "white" }}>
            MovieDb
          </Link>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            style={{ color: "white" }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ml-auto">
              <Link
                to="/movie"
                class="nav-item nav-link active"
                style={{ color: "white" }}
              >
                Movie
              </Link>
              <Link
                to="/soap"
                class="nav-item nav-link"
                style={{ color: "white" }}
              >
                Soap
              </Link>
              <Link
                to="/signup"
                class="nav-item nav-link"
                style={{ color: "white" }}
              >
                Register
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
