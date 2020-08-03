import { socket } from "./socket";
import setCreatedRoom from "../redux/thunks/setCreatedRoom";
import { updateUsers, addMessage } from "../redux/actions/roomActions";
import leftRoom from "../redux/thunks/leftRoom";
import saveToSessionStorage from "./saveToSessionStorage";
import clearSessionStorage from "./clearSessionStorage";

export default function handleServerEvents() {
  socket.on("connectionData", (c) => {
    saveToSessionStorage("userId", c.userId);
    saveToSessionStorage("roomId", c.roomId);
    saveToSessionStorage("username", c.username);
  });

  socket.on("invalidRoomId", () => {
    alert("There is no Room with this ID");
  });

  socket.on("invalidRejoinData", () => {
    clearSessionStorage();
  });

  return (dispatch) => {
    socket.on("roomData", (r) => {
      dispatch(setCreatedRoom(r));
    });

    socket.on("newUser", (newData) => {
      dispatch(updateUsers(newData.users));
      dispatch(addMessage(newData.message));
    });

    socket.on("removeUser", (newData) => {
      dispatch(updateUsers(newData.users));
      dispatch(addMessage(newData.message));
    });

    socket.on("logOut", () => {
      dispatch(leftRoom());
    });

    socket.on("message", (m) => {
      dispatch(addMessage(m));
    });
  };
}
