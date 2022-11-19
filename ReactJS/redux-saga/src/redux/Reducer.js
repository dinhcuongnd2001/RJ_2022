import { initialState } from "./InitialState";
import { FETCH_USER_SUCCESS, LOGIN_SUCCESS, FETCH_USER } from "./Action";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, userlogined: action.payload };
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
export default rootReducer;