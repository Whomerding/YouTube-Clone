import React, { useState, useEffect } from "react";

const ReplyPresenter = ({reply}) => {
  return (
    <li style= {{listStyle: 'none'}}>
      <div style={{textAlign: 'left'}}>
        <p style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 'small'}}>{reply.user.first_name} {reply.user.last_name}</p>
        <p style={{fontSize: 'small'}}>{reply.text}</p>
      </div>
    </li>
  );
};

export default ReplyPresenter;
