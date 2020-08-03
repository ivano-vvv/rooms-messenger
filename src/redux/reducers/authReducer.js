import { AUTH_USER, LOG_OUT } from "../actions/authActions";

let initialState = {
  isAuth: false,
  id: "",
  name: "",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuth: true,
        id: action.userData.id,
        name: action.userData.name,
      };
    case LOG_OUT:
      return initialState;

    default:
      return state;
  }
}
