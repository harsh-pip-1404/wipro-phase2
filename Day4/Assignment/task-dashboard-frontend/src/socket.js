import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
    transports: ["websocket", "polling"], // Allow fallback
    reconnection: true, // Auto-reconnect
    reconnectionAttempts: 10,
    reconnectionDelay: 2000,
});

export default socket;
