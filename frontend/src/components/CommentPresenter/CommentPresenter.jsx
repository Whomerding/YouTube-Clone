import React, { useState, useEffect } from "react";
import axios from "axios";
import ReplyMapper from "../ReplyMapper/ReplyMapper";
import PostReply from "../PostReply/PostReply";

const CommentPresenter = ({ comment }) => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    getAllReplies();
  }, []);

  async function getAllReplies() {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/reply/${comment.id}/`
      );
      setReplies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li>
      <div style={{ textAlign: "left" }}>
        <p
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: ",medium",
          }}
        >
          {comment.user.first_name} {comment.user.last_name}
        </p>
        <p style={{ fontSize: "small" }}>{comment.text}</p>
        <ul>
        <h3 style= {{fontWeight: "bold", fontSize: "medium"}}>Replies</h3>
        <ReplyMapper replies = {replies} />
        <PostReply
            getAllReplies={getAllReplies}
            commentId={comment.id}/>
        </ul>
      </div>
    </li>
  );
};

export default CommentPresenter;
