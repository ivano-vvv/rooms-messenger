import {
  SET_ROOM_DATA,
  UPDATE_USERS,
  ADD_MESSAGE,
  DELETE_ROOM_DATA,
} from "../actions/roomActions";

let initialState = {
  id: "",
  name: "",
  users: [],
  history: [],
};

export default function roomReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROOM_DATA:
      return action.roomData;
    case UPDATE_USERS:
      return { ...state, users: action.users };
    case ADD_MESSAGE:
      return { ...state, history: [...state.history, action.message] };
    case DELETE_ROOM_DATA:
      return initialState;

    default:
      return state;
  }
}
