import React from 'react';
import ReplyPresenter from '../ReplyPresenter/ReplyPresenter';


function ReplyMapper({replies}) {
   
    return (

        <ul className='reply-list'>
            {replies.map(el=> <ReplyPresenter key={el.id} reply={el}/>)}
        </ul>

     )};

export default ReplyMapper;