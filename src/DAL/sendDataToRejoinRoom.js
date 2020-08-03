import { socket } from "./socket";
import { getDataForRejoin } from "./getItemFromSessionStorage";

export default function sendDataToRejoinRoom() {
  socket.emit("rejoinRoom", getDataForRejoin(), (error) => {
    if (error) {
      alert(error);
    }
  });
}
