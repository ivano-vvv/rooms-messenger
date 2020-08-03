import { socket } from "./socket";

export default function sendNewMessage(roomId, value) {
  socket.emit(
    "message",
    {
      roomId,
      message: value,
    },
    (error) => {
      if (error) {
        alert(error);
      }
    }
  );
}
