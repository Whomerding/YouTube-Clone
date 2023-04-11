import React, { useState } from "react";
import axios from "axios";


const PostComment = ({ getAllComments }) => {
  const [commentData, setCommentData] = useState({
    video_id: "",
    text: "",
});
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/comment/", commentData);
      getAllComments();
      console.log("Song added!");
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (event) => {
    setCommentData({ ...commentData, [event.target.name]: event.target.value });
  };
  return (
    <form className = "container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Comment</label>
        <input
          type="text"
          name="text"
          value={commentData.text}
          onChange={handleInputChange}
        />
      </div>
 
    </form>
  );
};
export default PostComment;
