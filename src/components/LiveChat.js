import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';


const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API calling")
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className='ml-2 border border-black h-[500px] bg-gray-50 rounded-lg overflow-y-scroll flex flex-col-reverse'>

        {/* <h1 className='font-bold py-2 mx-4 text-lg'>Live chat</h1> */}
        <div>
          {
            // Disclaimer: Do not use indexes as keys
            ChatMessages.map((c, i) => (<ChatMessage
              key={i}
              name={c.name}
              message={c.message}
            />))}
        </div>
      </div>

      <form className='w-full rounded-lg p-2 ml-2 border border-black'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Shrikant Kushwah",
            message: liveMessage,
          })
          );
          setLiveMessage("");
        }}
      >
        <input
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value)
          }}
          className='px-2 w-80'
          type="text"
          placeholder='Search'
        />
        <button
          className='p-2 mx-2 bg-green-100 font-semibold rounded-lg'>Send</button>
      </form>
    </>
  )
};

export default LiveChat;
