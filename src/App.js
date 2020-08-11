import React from "react";
import "./App.css";
import Movie from "./Components/movie";
import Soap from "./Components/soap";
import { Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import Footer from "./Components/Footer";
import SingleMoviePage from "./Components/SingleMoviePage";
import SingleSoapPage from "./Components/SingleSoapPage";
import Nav from "./Components/nav";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div style={{ minHeight: "80vh" }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movie">
              <Movie />
            </Route>
            <Route exact path="/soap">
              <Soap />
            </Route>
            <Route exact path="/movie/:id">
              <SingleMoviePage />
            </Route>
            <Route exact path="/soap/:id">
              <SingleSoapPage />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    state: state.movie,
  };
};

export default connect(mapStateToProps)(App);
