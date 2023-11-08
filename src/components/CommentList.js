import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
    if (!comments) {
        return null;
      }
    return comments.map((comment, index) =>
        <div key ={index}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList key={index} comments={comment.reply} />
            </div>
        </div>
    )
}

export default CommentList;