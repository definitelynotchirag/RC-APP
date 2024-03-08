import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        }
    ],//array of participants
    messages:[  
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Message',
            default:[],
        },
    ],//array of messages
},
{timestamps:true}//timestamps will automatically add createdAt and updatedAt fields to the schema
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;