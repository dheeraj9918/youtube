import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useSelector, useDispatch } from 'react-redux';
import { addmessages } from '../utils/chatSlice';
import { generateRandomName, randomMessageGenerator } from '../utils/helper';

const LiveChat = () => {
  const [isLiveMessage, setIsLiveMessage] = useState('');
  const dispatch = useDispatch();
  const chatMessage = useSelector(store => store.chat.messages);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addmessages({
          name: generateRandomName(),
          message: randomMessageGenerator(25) + ' 🚀',
        })
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=''>
      <div className='bg-gray-100 border border-gray-400 ml-2 rounded-md p-2 w-full h-[600px] overflow-y-scroll flex flex-col-reverse'>
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className='w-full border border-gray-400 mt-2 p-1 ml-2 rounded-b-md'
        onSubmit={e => {
          e.preventDefault();
          dispatch(
            addmessages({
              name: 'Dheeraj Rauniyar',
              message: isLiveMessage,
            })
          );
          setIsLiveMessage('');
        }}
      >
        <input
          value={isLiveMessage}
          onChange={e => {
            setIsLiveMessage(e.target.value);
          }}
          className='w-full  md:w-[350px] p-[3px] px-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2'
          type='text'
        />
        <button
          className='bg-blue-400 ml-3 p-[3px] w-full md:w-12 rounded-md'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;

