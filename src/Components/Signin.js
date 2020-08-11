import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Signin extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4 offset-4 mt-5" style={{ marginBottom: "90px" }}>
          <h1>SignIn</h1>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
            <p>Dont have an account? {<Link to="/signup">Signup</Link>} here</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
