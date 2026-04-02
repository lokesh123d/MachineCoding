import React, { forwardRef } from "react";

const Note = forwardRef(({ content ,initialPosition,...props },ref) => {
  return <div
ref={ref}
  {...props}
  style={{
    position:'absolute',
    padding:'10px',
    userSelect:'none',
    cursor:'move',
    border:'2px solid black',
    fontSize:'10px',
    borderRadius:'2px',
    width:'150px',
    left:`${initialPosition?.x}px`,
    top:`${initialPosition?.y}px`,
    backgroundColor:'lightyellow',
  }}
  >📌 {content}</div>;
});

export default Note;
