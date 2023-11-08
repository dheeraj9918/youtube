import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useSelector, useDispatch } from 'react-redux';
import { addmessages } from '../utils/chatSlice';
import { generateRandomName, randomMessageGenerator } from '../utils/helper';


const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessage = useSelector(store => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            //api polling 
            console.log('api polling');
            dispatch(
                addmessages({
                    name: generateRandomName(),
                    message: randomMessageGenerator(25) + " 🚀",
                })
            )
        }, 500);

        return () => clearInterval(i);

    }, []);

    return (
        <div className='border border-gray-400 [600px] rounded-md ml-2'>
            <div className='bg-gray-100 rounded-md p-2 w-full h-[550px]  overflow-y-scroll flex flex-col-reverse'>
                {chatMessage.map((c, i) => (<ChatMessage key={i} name={c.name} message={c.message} />))}
            </div>
            <div className='w-full   ml-2 p-2 rounded-md'>
                <input className='w-[350px] p-[3px] border border-gray-400 rounded-md' type="text"/>
                <button className='bg-blue-400 ml-2 p-[3px] w-12 rounded-md'>Send</button>
            </div>
        </div>
    )
}

export default LiveChat;