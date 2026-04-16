import { nanoid } from "nanoid";
import React, { useState } from "react";

const UseComment = () => {
  const [commentData, setCommentData] = useState([
    {
      id: 1,
      userName: "@lokeshdangwal",
      content: "This is a comment.",
      children: [],
      likes: [],
      btnBarOpen: false,
      disLike: [],
    },
  ]);

  function addReply(comemntId) {
    let replyText = prompt("Enter your reply:");

    if (!replyText) return;
    let newReply = {
      id: nanoid(),
      userName: "@lokeshdangwal",
      content: replyText,
      children: [],
      likes: [],
      disLike: [],
      btnBarOpen: false,
    };

    function addReplyToTree(commentId, comment, tree) {
      return tree.map((item) => {
        if (item.id == commentId) {
          return { ...item, children: [...item.children, comment] };
        }
        if (item.children.length > 0) {
          return {
            ...item,
            children: addReplyToTree(commentId, comment, item.children),
          };
        }
        return item;
      });
    }
    setCommentData((prev) => addReplyToTree(comemntId, newReply, prev));
  }

  function toggleBtnBar(commentId, tree) {
    return tree.map((item) => {
      if (item.id == commentId) {
        return { ...item, btnBarOpen: !item.btnBarOpen };
      }
      if (item.children.length > 0) {
        return {
          ...item,
          children: toggleBtnBar(commentId, item.children),
        };
      }
      return item;
    });
  }

  function commentDelete(commentId, tree) {
    return tree
      .filter((item) => item.id !== commentId)
      .map((item) => ({
        ...item,
        children: commentDelete(commentId, item.children),
      }));
  }

  function updateLike(commentId, user, tree) {
    return tree.map((item) => {
      if (item.id == commentId) {
        return {
          ...item,
          likes: [...item.likes, user],
        };
      }
      if (item.children.length > 0) {
        return {
          ...item,
          children: updateLike(commentId, user, item.children),
        };
      }
      return item;
    });
  }

  function updateDisLike(commentId, user, tree) {
    return tree.map((item) => {
      if (item.id == commentId) {
        return {
          ...item,
          disLike: [...item.disLike, user],
        };
      }
      if (item.children.length > 0) {
        return {
          ...item,
          children: updateDisLike(commentId, user, item.children),
        };
      }
      return item;
    });
  }

  function commentEdit(commentId, prevContent) {
    let editText = prompt("Enter Edit Task .......", prevContent);

    if (!editText) return;

    function changeCommentText(commentId, text, tree) {
      return tree.map((item) => {
        if (item.id == commentId) {
          return {
            ...item,
            content: text,
          };
        }

        if (item.children.length > 0) {
          return {
            ...item,
            children: changeCommentText(commentId, text, item.children),
          };
        }

        return item;
      });
    }

    setCommentData((prev) => changeCommentText(commentId, editText, prev));
  }

  return {
    commentData,
    setCommentData,
    addReply,
    toggleBtnBar,
    commentEdit,
    commentDelete,
    updateLike,
    updateDisLike,
  };
};

export default UseComment;
