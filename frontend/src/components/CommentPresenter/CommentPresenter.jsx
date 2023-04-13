import React, { useState, useEffect } from "react";
import './CommentPresenter.css'
const CommentPresenter = (
    { comment = {
    id: number,
    user: {
        id: number,
        password: string,
        last_login: null,
        is_superuser: boolean,
        username: string,
        first_name: string,
        last_name: string,
        email: string,
        is_staff: boolean,
        is_active: boolean,
        date_joined: string
    },
    video_id: string,
    text: string,
    likes: number,
    dislikes: number,}}
) => {
  return (
    <li>
      <div style={{textAlign: 'left'}}>
        <p style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: ',medium'}}>{comment.user.first_name} {comment.user.last_name}</p>
        <p style={{fontSize: 'small'}}>{comment.text}</p>
      </div>
    </li>
  );
};

export default CommentPresenter;
