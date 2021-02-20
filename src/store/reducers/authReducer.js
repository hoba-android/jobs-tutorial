import { FACBOOK_LOGIN_SUCCESS, FACBOOK_LOGIN_FAIL } from "../actions/types";

const INITIAL_STATE = {
  token: "",
};
export default (state = {}, action) => {
  switch (action.type) {
    case FACBOOK_LOGIN_SUCCESS:
      return { token: action.payload };
    case FACBOOK_LOGIN_FAIL:
      return { token: null };

    default:
      return state;
  }
};
