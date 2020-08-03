import { socket } from "./socket";

export default function sendLeavingRoom(roomId) {
  socket.emit(
    "leaveRoom",
    {
      roomId,
    },
    (error) => {
      if (error) {
        alert(error);
      }
    }
  );
}
