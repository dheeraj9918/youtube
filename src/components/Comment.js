import React from 'react'




const Comment = ({data}) => {
    const { name, text} = data;
    return (
        <div className='flex pl-2 py-2 round rounded-lg shadow-md bg-gray-200 my-3'>
            <div>
                <img alt ="person" className='w-12 h-12 mr-4' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
            </div>
            <div>
                <h1 className='font-bold'>{name}</h1>
                <h1>{text}</h1>
            </div>
        </div>
    )
};

export default Comment;