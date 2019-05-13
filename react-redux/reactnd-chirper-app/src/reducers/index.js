import { combineReducers } from "redux";
import authUser from "../reducers/authUser";
import users from "../reducers/users";
import tweets from "../reducers/tweets";

export default combineReducers({
  authUser,
  users,
  tweets
});
