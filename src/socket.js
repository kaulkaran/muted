import { io } from "socket.io-client";

const socket = io("https://mute-backend-ggxq.onrender.com", {
  autoConnect: false,
  transports: ["websocket"],
});

export const connectSocket = (token) => {
  socket.auth = { token };
  socket.connect();
};

export default socket;
