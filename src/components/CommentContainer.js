import React from 'react'
import CommentList from './CommentList';
import { CommentData } from "./CommentDeta";


const CommentContainer = () => {

  return (
    <div className='p-4 m-2'>
      <h1 className='text-2xl font-bold'>Comment :</h1>
      <CommentList comments={CommentData} />
    </div>
  )
}

export default CommentContainer;