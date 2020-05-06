import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css'

function CommentApp(){
    return(
        <div>
            <CommentInput />
            <CommentList />
        </div>
    )
}
export default CommentApp;