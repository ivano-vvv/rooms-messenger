import { authUser } from "../actions/authActions";
import { setRoomData } from "../actions/roomActions";

export default function setCreatedRoom({ room, userData }) {
  return (dispatch) => {
    dispatch(authUser(userData));
    dispatch(setRoomData(room));
  };
}
