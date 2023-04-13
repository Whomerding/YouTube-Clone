import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import './PostComment.css'

const PostComment = ({ getAllComments, realVideoId }) => {
  const [user, token] = useAuth (); 
  const [commentData, setCommentData] = useState({
    video_id:realVideoId ,
    text: ""
});


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post("http://127.0.0.1:8000/api/comment/", commentData, {headers: {Authorization:"Bearer " + token}});
      getAllComments();
      setCommentData ({video_id:realVideoId ,
        text: ""});
      console.log("Comment added!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setCommentData({ ...commentData, [event.target.name]: event.target.value });
  };



  return (
    <form  className = 'comment-form' onSubmit={handleSubmit} >
      <div>
        <label>Comment</label>
        <input
          style={{height: '2REM'}}
          type="text"
          name="text"
          value={commentData.text}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <button className = 'comment-button' type="submit">Submit</button>
      </div>
    </form>
    
  );
};
export default PostComment;
