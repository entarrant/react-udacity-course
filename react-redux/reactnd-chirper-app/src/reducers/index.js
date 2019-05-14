import { combineReducers } from "redux";
import authUser from "../reducers/authUser";
import users from "../reducers/users";
import tweets from "../reducers/tweets";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authUser,
  users,
  tweets,
  loadingBar: loadingBarReducer
});
