import { nanoid } from "nanoid";
import React from "react";

const Comment = ({
  commentData,
  setCommentData,
  addReply,
  toggleBtnBar,
  commentEdit,
  commentDelete,
  updateLike,
  updateDisLike,
}) => {

  function RenderComments({ tree }) {
    return tree.map((comment) => (
      <div className="comment" key={comment.id}>
        <div className="header">
          <span className="user-name">{comment.userName}</span>
          <span className="comment-content">{comment.content}</span>
        </div>
        {comment.btnBarOpen ? (
          <div className="btns-container">
            <button
              className="btn"
              onClick={(e) =>
                setCommentData((prev) =>
                  updateLike(comment.id, comment.userName, prev),
                )
              }
            >
              Like <span>{comment.likes.length}</span>
            </button>
            <button
              className="btn"
              onClick={(e) =>
                setCommentData((prev) =>
                  updateDisLike(comment.id, comment.userName, prev),
                )
              }
            >
              dis-like <span>{comment.disLike.length}</span>
            </button>
            <button className="btn" onClick={(e) => addReply(comment.id)}>
              Reply
            </button>
            <button
              className="btn"
              onClick={(e) => commentEdit(comment.id, comment.content)}
            >
              Edit
            </button>
            <button
              className="btn"
              onClick={(e) =>
                setCommentData((prev) => commentDelete(comment.id, prev))
              }
            >
              Delete
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              style={{ cursor: "pointer" }}
              className="lucide lucide-chevrons-down-up-icon lucide-chevrons-down-up"
              onClick={(e) =>
                setCommentData((prev) => toggleBtnBar(comment.id, prev))
              }
            >
              <path d="m7 20 5-5 5 5" />
              <path d="m7 4 5 5 5-5" />
            </svg>
          </div>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="lucide lucide-chevron-down-icon lucide-chevron-down"
            style={{ cursor: "pointer" }}
            onClick={(e) =>
              setCommentData((prev) => toggleBtnBar(comment.id, prev))
            }
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}

        {comment.children?.length > 0 && (
          <RenderComments tree={comment.children} />
        )}
      </div>
    ));
  }

  return (
    <div>
      <div className="comment-container">
        <RenderComments tree={commentData} />
      </div>
    </div>
  );
};

export default Comment;
