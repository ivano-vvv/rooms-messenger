import io from "socket.io-client";

const endpoint = "https://rooms-messenger.herokuapp.com/";

export const socket = io(endpoint);
