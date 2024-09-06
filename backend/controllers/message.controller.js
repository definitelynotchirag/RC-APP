import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId,io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const {message} = req.body; //get message from the request body
    const { id: receiverId } = req.params; //get receiverId from the request params
    const senderId = req.user._id; //get senderId from the request user

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }); //find conversation between sender and receiver

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    } //if conversation does not exist, create a new conversation

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    }); //create a new message

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    } //if message is created, push it to the conversation


    // SOCKET.IO Goes Here

    // await conversation.save(); //save the conversation
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(200).json(newMessage); //send the new message as response

    const receiverSocketId = getReceiverSocketId(receiverId); //get receiver's socketId 
    if(receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage); //send the new message to the receiver
    }

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    } //if message is not present, send an error message
  } catch (error) {
    console.log("First error in sendMessage function: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req,res) => {

  try{
    const {id:userToChatId} = req.params;

    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: {$all: [senderId, userToChatId]}
    }).populate("messages");
    //find conversation between sender and receiver and populate the messages

    if(!conversation){
      return res.status(200).json([]);
    } //if conversation does not exist, send an empty array

    const messages = conversation.messages;

    res.status(200).json(conversation.messages); 
  }
  catch{
    console.log("Error in getMessages function: ", error.message);
    res.status(500).json({message: "Internal Server Error"});
  }

}