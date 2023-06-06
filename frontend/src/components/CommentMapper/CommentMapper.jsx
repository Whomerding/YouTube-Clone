import React from 'react';
import CommentPresenter from '../CommentPresenter/CommentPresenter';

import './CommentMapper.css'

function CommentMapper({comments}) {

    

    return (

        <ul className='comment-list'>
            {comments.map(el=> <CommentPresenter key={el.id} comment={el}/>)}  
        </ul>

     )};

export default CommentMapper;
