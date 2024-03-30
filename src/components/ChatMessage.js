import React from 'react';
import {SUBSCRIPTIONS_IMAGE} from '../utils/constants';

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img 
      className='h-8 w-8 mx-2' 
      src={SUBSCRIPTIONS_IMAGE} 
      alt="user" 
      />
      <span className='font-semibold'>{name}</span>
      <span className='px-2 text-gray-800'>{message}</span>
    </div>
  )
}

export default ChatMessage;
