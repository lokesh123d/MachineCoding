import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Carousel = ({ imageData }) => {
const [MoveLength, setMoveLength] = useState(0);
const containerRef = useRef(null)

useEffect(()=>{
// containerRef.current.clientLeft=900
},[])

  return (
    <div>
      <div className="scrollBarContainer"  ref={containerRef}>
        {imageData.map((post) => {
          return (
            <div className="postContainer">
              <h2>{post.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
