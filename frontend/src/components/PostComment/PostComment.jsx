import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const PostComment = ({ getAllComments }) => {
  const [user, token] = useAuth ();  
  const [commentData, setCommentData] = useState({
    video_id: '0sMtoedWaf0',
    text: ""
});


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response = await axios.post("http://127.0.0.1:8000/api/comment/", commentData, {headers: {Authorization:"Bearer " + token}});
      getAllComments();
      console.log("Comment added!");
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (event) => {
    setCommentData({ ...commentData, [event.target.name]: event.target.value });
  };
  return (
    <form className = "container" onSubmit={handleSubmit} >
      <div className="form-group">
        <label>Comment</label>
        <input
          type="text"
          name="text"
          value={commentData.text}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
    
  );
};
export default PostComment;
