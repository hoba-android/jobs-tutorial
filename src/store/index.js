import { compose, applyMiddleware, createStore } from "redux";

import ReduxThunk from "redux-thunk";
import reducders from "./reducers";

const store = createStore(reducders, {}, applyMiddleware(ReduxThunk));

export default store;
