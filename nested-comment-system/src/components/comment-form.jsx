import { nanoid } from "nanoid";
import React, { useState } from "react";

const CommentForm = ({ commentData, setCommentData }) => {
  const [commentText, setCommentText] = useState("");

  function addPost(e) {
    e.preventDefault();
    let newComment = {
      id: nanoid(),
      userName: "@lokeshdangwal",
      content: commentText,
      children: [],
      likes: [],
      disLike: [],
      btnBarOpen: false,
    };
    setCommentData([...commentData, newComment]);
    setCommentText("");
  }

  return (
    <form className="comment-form" onSubmit={addPost}>
      <textarea
        placeholder="Write a comment..."
        className="comment-textarea"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addPost(e);
        }}
      />
      <button type="submit" className="post-btn btn">
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
