import React from "react";
import { Children } from "react";
import { useState } from "react";

const Comment = () => {
  const [currentComment, setCurrentComment] = useState("");
  const [commentData, setCommentData] = useState([]);
  const [nestedCommentQuery, setnestedCommentQuery] = useState("");

  function addComment() {
    if (!currentComment.trim()) return;
    let newComment = {
      commentText: currentComment,
      id: Date.now(),
      nestedComment: [],
    };
    setCommentData([...commentData, newComment]);
  }

  function ShowComment(data) {
    return data.map((ele) => (
      <div key={ele.id} style={{ marginLeft: "20px" }}>
        {ele.commentText}
        <input
          type="text"
          placeholder="reply"
          onChange={(e) => setnestedCommentQuery(e.target.value)}
          value={nestedCommentQuery}
        />
        <button onClick={() => nestedCommentAdd(ele.id , ele)}>send reply</button>
        {ele.nestedComment.length > 0 && ShowComment(ele.nestedComment)}
      </div>
    ));
  }

  function nestedCommentAdd(id,ele) {

    const newComment = {
      id: Date.now(),
      commentText: nestedCommentQuery,
      nestedComment: [],
    };
  }




  return (
    <div>
      <input
        type="text"
        placeholder="comment something here....."
        value={currentComment}
        onChange={(e) => setCurrentComment(e.target.value)}
      />
      <button onClick={addComment}>send Comment</button>

      <div className="show-comment">{ShowComment(commentData)}</div>
    </div>
  );
};

export default Comment;

// ak input hoga jisas mai likhunga aur ak li create hoga jo content and input lega aur us inptu mai likhana mai inptu create hoga
