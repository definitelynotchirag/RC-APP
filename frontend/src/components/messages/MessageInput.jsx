import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState(""); // [1]
  const { loading, sendMessage } = useSendMessage(); // [2]

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message); // [3]
    setMessage(""); // [4]
    // console.log('Message Sent');
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send A Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {/* <BsSend/> */}
          {loading ? (
            <span className="loading loading-spinner mx-auto"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

// STARTER MESSAGEINPUT COMPONENT
// import React from 'react';
// import { BsSend } from 'react-icons/bs';

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full relative'>
//             <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
//             placeholder='Send A Message'></input>
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                 <BsSend/>
//             </button>
//         </div>

//     </form>
//   )
// }

// export default MessageInput
