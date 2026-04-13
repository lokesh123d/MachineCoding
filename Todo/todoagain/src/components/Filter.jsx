import React, { useEffect, useState } from "react";

const Filter = ({ state, dispatch }) => {
  const [searchQuery, setsearchQuery] = useState("");
  const [status, setstatus] = useState("");

  useEffect(() => {
      let normilizeQuery = searchQuery.trim().toLocaleLowerCase();


      if(normilizeQuery && status==''){
    dispatch({ type: "SET_RENDER_DATA", payload:state.allTodo });
      }



    let data = state.allTodo.filter((item) => {
      if (item.title.toLocaleLowerCase().includes(normilizeQuery)) {
        if (item.isCompleted && status == "complete") {
          return item;
        } else if (!item.isCompleted && status == "pending") {
          return item;
        }
      }
    });

    dispatch({ type: "SET_RENDER_DATA", payload: data });
  }, [searchQuery, status]);

  return (
    <div>
      <div className="search-items">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
          placeholder="search todo items here...."
        />

        <select
          name="task-status"
          id="status"
          onChange={(e) => setstatus(e.target.value)}
        >
          <option value="">Filter By Status</option>
          <option value="complete">Completed Task</option>
          <option value="pending">Pending Task</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
