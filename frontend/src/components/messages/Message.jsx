import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.from === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat chat-start" : "chat chat-end";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;

  const bubblebgColor = fromMe ? "bg-purple-500" : "";
  const shakeClass = message.shouldShake? "shake" : "";


  return (
    <div className={`${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          ></img>
        </div>
      </div>

      <div className="chat-header">
        Obi-Wan Kenobi
       
      </div>

      <div className={`chat-bubble text-white ${bubblebgColor} ${shakeClass} pb-2`}>{message.message}</div>
      {/* <div className="chat-footer opacity-50">Delivered</div> */}
      <time className="chat-footer opacity-50">{formattedTime}</time>
    </div>
  );
};

export default Message;
