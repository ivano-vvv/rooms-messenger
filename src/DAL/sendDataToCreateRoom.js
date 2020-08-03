import { socket } from "./socket";

export default function sendDataToCreateRoom(values) {
  socket.emit(
    "createRoom",
    {
      creatorName: values.username,
      roomName: values.roomname,
    },
    (error) => {
      if (error) {
        alert(error);
      }
    }
  );
}
