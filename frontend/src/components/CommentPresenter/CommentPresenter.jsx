import React, { useState, useEffect } from "react";
import './CommentPresenter.css'
// import ReplyMapper from "../ReplyMapper/ReplyMapper";
// import axios from "axios";
const CommentPresenter = ({ comment}) => {
// const [replies, setReplies] = useState([])

  


// useEffect(()=>{
// //     getAllReplies();
// // }, []);

// // async function getAllReplies(){
// //     try {
// //         const response = await axios.get(`http://127.0.0.1:8000/api/reply/5/`);
// //         setReplies(response.data);
      
        
// //     } catch (error) {
// //         console.log (error)
// //     }
// //       }  
  
  return (
    <li>
      <div style={{textAlign: 'left'}}>
        <p style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: ',medium'}}>{comment.user.first_name} {comment.user.last_name}</p>
        <p style={{fontSize: 'small'}}>{comment.text}</p>
        {/* <ul>
          <ReplyMapper replies = {replies} />
        </ul> */}
      </div>
    </li>
  );
};

export default CommentPresenter;