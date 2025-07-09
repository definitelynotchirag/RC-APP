import { createAdapter } from "@socket.io/redis-adapter";
import express from "express";
import http from "http";
import Redis from "ioredis";
import { Server } from "socket.io";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: [
            "https://localhost:5000",
            "https://chatx.chiragx.me"
        ],
        methods: ["GET", "POST"],
    },
});

// Replace with your actual Redis Cloud URL
const REDIS_CLOUD_URL = process.env.REDIS_CLOUD_URL || "redis://default:<password>@<host>:<port>";

const pubClient = new Redis(REDIS_CLOUD_URL);
const subClient = new Redis(REDIS_CLOUD_URL);

pubClient.on("error", err => {
    console.error("Redis Pub Client Error:", err);
});
subClient.on("error", err => {
    console.error("Redis Sub Client Error:", err);
});

io.adapter(createAdapter(pubClient, subClient));

// Test Redis connection by setting a test key
pubClient
    .set("socketio_test_key", "connected", "EX", 300) // expires in 5 minutes
    .then(() => console.log("Test key set in Redis: socketio_test_key=connected"))
    .catch(err => console.error("Failed to set test key in Redis:", err));

export const getReceiverSocketId = receiverId => {
    return userSocketMap[receiverId];
};

const userSocketMap = {}; //to store the mapping of user and socket

io.on("connection", socket => {
    console.log("User Connected", socket.id);

    const userId = socket.handshake.query.userId; //get userId from the query parameter
    if (userId != "undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap)); //send the userSocketMap to the client

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
        delete userSocketMap[userId]; //    delete the user from the userSocketMap
        io.emit("getOnlineUsers", Object.keys(userSocketMap)); //send the userSocketMap to the client
    }); //when user disconnects
});

export { app, io, server };
