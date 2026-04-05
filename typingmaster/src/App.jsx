import React, { useState } from "react";

// Single Comment Component (Recursive)
const Comment = ({ comment, addReply }) => {
  const [replyText, setReplyText] = useState("");
  const [showReply, setShowReply] = useState(false);

  return (
    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
      <p>{comment.text}</p>

      <button onClick={() => setShowReply(!showReply)}>
        Reply
      </button>

      {showReply && (
        <div>
          <input
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write reply..."
          />
          <button
            onClick={() => {
              addReply(comment.id, replyText);
              setReplyText("");
              setShowReply(false);
            }}
          >
            Add Reply
          </button>
        </div>
      )}

      {/* Render children recursively */}
      {comment.children.map((child) => (
        <Comment
          key={child.id}
          comment={child}
          addReply={addReply}
        />
      ))}
    </div>
  );
};

export default function App() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Add root comment
  const addComment = () => {
    setComments([
      ...comments,
      {
        id: Date.now(),
        text: newComment,
        children: []
      }
    ]);
    setNewComment("");
  };

  // Add reply (recursive update)
  const addReply = (parentId, text) => {
    const addReplyRecursive = (commentsList) => {
      return commentsList.map((comment) => {
        if (comment.id === parentId) {
          return {
            ...comment,
            children: [
              ...comment.children,
              {
                id: Date.now(),
                text,
                children: []
              }
            ]
          };
        }
        return {
          ...comment,
          children: addReplyRecursive(comment.children)
        };
      });
    };

    setComments(addReplyRecursive(comments));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Nested Comments</h2>

      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={addComment}>Add Comment</button>

      <div>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            addReply={addReply}
          />
        ))}
      </div>
    </div>
  );
}