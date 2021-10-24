import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  getMensBottomReducer,
  getMensTopReducer,
  getWomensTopReducer,
  getWomensBottomReducer,
  getMensEthinicReducer,
  getWomensEthinicReducer,
  getMensTopDetailReducer,
  getMensBottomDetailReducer,
  getWomensTopDetailReducer,
  getMensEthinicDetailReducer,
  getWomensBottomDetailReducer,
  getWomensEthinicDetailReducer,
} from "./reducers/productReducer.js";
import { cartReducer } from "./reducers/cartReducer.js";

const reducer = combineReducers({
  getMensTop: getMensTopReducer,
  getMensBottom: getMensBottomReducer,
  getWomensTop: getWomensTopReducer,
  getWomensBottom: getWomensBottomReducer,
  getMensEthinic: getMensEthinicReducer,
  getWomensEthinic: getWomensEthinicReducer,
  getMensTopDetails: getMensTopDetailReducer,
  getMensBottomDetails: getMensBottomDetailReducer,
  getWomensTopDetails: getWomensTopDetailReducer,
  getWomensBottomDetails: getWomensBottomDetailReducer,
  getMensEthinicDetails: getMensEthinicDetailReducer,
  getWomensEthinicDetails: getWomensEthinicDetailReducer,
  cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
