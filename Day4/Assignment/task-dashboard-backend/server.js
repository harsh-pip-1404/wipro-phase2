const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors()); // Enable CORS

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

let tasks = []; // Store tasks in memory

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Send existing tasks to the connected client
    socket.emit("tasks", tasks);

    // Handle task addition
    socket.on("addTask", (task) => {
        tasks.push(task); // Add to memory
        io.emit("tasks", tasks); // Broadcast update
    });

    // Handle task deletion
    socket.on("deleteTask", (index) => {
        tasks.splice(index, 1);
        io.emit("tasks", tasks);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});
