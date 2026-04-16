import React from "react";
import Comment from "./components/comment-item";
import CommentForm from "./components/comment-form";
import UseComment from "./hooks/use-comment";

const App = () => {
  const commentState = UseComment();

  return (
    <div>
      <CommentForm {...commentState} />
      <Comment {...commentState} />
    </div>
  );
};

export default App;
