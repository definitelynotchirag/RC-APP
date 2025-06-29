import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import connectToMongoDB from "./db/connectToMongoDB.js";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import {app, server} from "./socket/socket.js";

// const app = express();

dotenv.config();


const PORT = process.env.PORT || 3000;


const __dirname = path.resolve();
// require("dotenv").config();



app.use(cookieParser());

app.use(express.json()); // To parse the incoming requests with JSON payloads

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/api/auth", authRoutes);//add auth routes
app.use("/api/messages", messageRoutes);//add message routes

app.use("/api/users", userRoutes);//add user routes
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "frontend","dist","index.html"));
})

server.listen(PORT, () =>                       
{
    connectToMongoDB();
    console.log(`Server Running on Port ${PORT}`);
});
