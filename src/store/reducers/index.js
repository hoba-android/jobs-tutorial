import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import jobreducer from "../reducers/jobsReducer";
import likesReducer from "../reducers/likesReducer";

export default combineReducers({
  auth: authReducer,
  jobs: jobreducer,
  likedJobs: likesReducer,
});
