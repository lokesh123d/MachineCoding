// https://www.greatfrontend.com/api/questions/like-btn
import React, { useEffect, useState } from "react";

const App = () => {
  const [isLiked, setisLiked] = useState(false);
  const [Error, setError] = useState(null);
  const [loading, setloading] = useState(false);

  async function handleLike() {
    try {
      setloading(true);
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-btn",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: isLiked ? "unlike" : "like",
          }),
        },
      );
      if (response.status >= 200 && response.status < 300) {
        setisLiked(!isLiked);
      } else {
        const res = await response.json();
        setError(res.message);
        return;
      }
    } finally {
      setloading(false);
    }
  }

  return (
    <div>
      {loading ? (
        <button>Lodaing..</button>
      ) : (
        <button
          onClick={(e) => handleLike()}
          className={`${isLiked ? "liked" : "likebtn"}`}
        >
          {isLiked ? "Liked" : "Like"}
        </button>
      )}

      {Error && Error}
    </div>
  );
};

export default App;
