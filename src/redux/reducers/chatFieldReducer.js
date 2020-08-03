import { CHANGE_VALUE, RESET_VALUE } from "../actions/chatFieldActions";

let initialState = {
  value: "",
};

export default function chatFieldReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return { ...state, value: action.value };
    case RESET_VALUE:
      return { ...state, value: "" };

    default:
      return state;
  }
}
