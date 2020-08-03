import { socket } from "./socket";

export default function sendDataToJoinRoom(values) {
  socket.emit(
    "joinRoom",
    {
      username: values.username,
      roomId: values.roomId,
    },
    (error) => {
      if (error) {
        alert(error);
      }
    }
  );
}
