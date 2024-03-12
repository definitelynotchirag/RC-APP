import React, { useEffect } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import { set } from 'mongoose';
import toast from 'react-hot-toast';
import useListenMessages from '../../hooks/useListenMessages';
// import { useConversation } from '../../context/ConversationContext';
// import setTimeout from 'timers';

const Messages = () => {

  const {messages,loading} = useGetMessages();
  useListenMessages();

  const lastMessageRef = React.useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    },100)
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>

        {!loading && messages.length > 0 && messages.map((message) => 
        <div ref={lastMessageRef} key={message._id}>
        <Message message={message} />
        </div>)
        }
        {loading && [...Array(6)].map((_,idx) => <MessageSkeleton key={idx} />)}
        {!loading && messages.length === 0 && <p className='text-center text-gray-400'>No messages yet. Say Hi!</p>}
        

    </div>
  )
}

export default Messages