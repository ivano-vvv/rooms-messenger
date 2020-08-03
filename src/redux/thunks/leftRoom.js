import { logOut } from "../actions/authActions";
import { deleteRoomData } from "../actions/roomActions";
import clearSessionStorage from "../../DAL/clearSessionStorage";

export default function leftRoom() {
  return (dispatch) => {
    dispatch(logOut());
    dispatch(deleteRoomData());
    clearSessionStorage();
  };
}
