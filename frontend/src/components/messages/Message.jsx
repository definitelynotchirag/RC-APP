import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://avatar.iran.liara.run/public/18"
          ></img>
        </div>
      </div>

      <div className="chat-header">
        Obi-Wan Kenobi
        <time className="text-xs opacity=50">12:34</time>
      </div>

      <div className="chat-bubble">Hi!WhatsUp?</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default Message;
