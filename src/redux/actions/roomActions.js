export const SET_ROOM_DATA = "SET_ROOM_DATA";
export function setRoomData(roomData) {
  return {
    type: SET_ROOM_DATA,
    roomData,
  };
}

export const UPDATE_USERS = "UPDATE_USERS";
export function updateUsers(users) {
  return {
    type: UPDATE_USERS,
    users,
  };
}

export const ADD_MESSAGE = "ADD_MESSAGE";
export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message,
  };
}

export const DELETE_ROOM_DATA = "DELETE_ROOM_DATA";
export function deleteRoomData() {
  return { type: DELETE_ROOM_DATA };
}
