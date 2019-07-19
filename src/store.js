import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// Reducers work in Redux is we have a root reducer
// and then any other reducer like our log reducer
// we just bring them into that root
import rootReducer from "./reducers";

const initialState = {};

// an array of middleware
const middleware = [thunk];

const store = createStore(
  // needs to know which reducers you're working with
  rootReducer,
  initialState,
  // we'll add our thunk middleware
  // will also had the whole dev tools functionality
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
