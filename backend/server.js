import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// require("dotenv").config();

dotenv.config();

app.use(cookieParser());

app.use(express.json()); // To parse the incoming requests with JSON payloads

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/api/auth", authRoutes);//add auth routes
app.use("/api/messages", messageRoutes);//add message routes

app.use("/api/users", userRoutes);//add user routes

app.listen(PORT, () => 
{
    connectToMongoDB();
    console.log(`Server Running on Port ${PORT}`);
});
