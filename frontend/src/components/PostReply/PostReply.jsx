import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './PostReply.css'


const PostReply = ({ getAllReplies, commentId }) => {
    const [user, token] = useAuth (); 
    const [replyData, setReplyData] = useState({
        comment_id: commentId ,
        text: ""
  });
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        let response = await axios.post(`http://127.0.0.1:8000/api/reply/`, replyData, {headers: {Authorization:"Bearer " + token}});
        getAllReplies();
        setReplyData ({comment_id:commentId ,
          text: ""});
        console.log("Reply added!");
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleInputChange = (event) => {
      setReplyData({ ...replyData, [event.target.name]: event.target.value });
    };
  
  
  
    return (
      <form  className = 'reply-form' onSubmit={handleSubmit} >
        <div>
          <label>Reply</label>
          <input
            style={{height: '1.5REM'}}
            type="text"
            name="text"
            value={replyData.text}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button className = 'reply-button' type="submit">Submit</button>
        </div>
      </form>
      
    );
  };
  export default PostReply;