import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let initialState = {
  movies: [],
  soaps: []
};

let movieReducer = (state = initialState.movies, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SET_MOVIE":
      stateCopy = action.payload;
      return stateCopy;
    default:
      return state;
  }
};

let soapReducer = (state = initialState.soaps, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

var rootReducer = combineReducers({ soap: soapReducer, movie: movieReducer });

var store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
