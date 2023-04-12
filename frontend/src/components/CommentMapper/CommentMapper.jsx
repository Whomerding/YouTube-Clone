import React, { useState, useEffect } from 'react';

import CommentPresenter from '../CommentPresenter/CommentPresenter';

function CommentMapper({comments}) {
   
    return (
        <ul>
            {comments.map(el=> <CommentPresenter key={el.id} comment={el}/>)}
        </ul>
     )};

export default CommentMapper;
