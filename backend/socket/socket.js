import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://localhost:3000",
    methods: ["GET", "POST"],
  },
});


export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};


const userSocketMap = {}; //to store the mapping of user and socket

io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  
  const userId = socket.handshake.query.userId; //get userId from the query parameter
  if(userId != "undefined") userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap)); //send the userSocketMap to the client

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
    delete userSocketMap[userId]; //    delete the user from the userSocketMap
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); //send the userSocketMap to the client
}); //when user disconnects
});

export { app, io, server };
