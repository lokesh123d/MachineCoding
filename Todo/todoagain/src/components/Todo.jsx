import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Filter from "./Filter";
const Todo = ({ state, dispatch }) => {
  const [currentTaskText, setcurrentTaskText] = useState("");
  const [completeTask, setcompleteTask] = useState([]);
  const [pendingTask, setpendingTask] = useState([]);
  useEffect(() => {
    let total = state.allTodo.reduce(
      (acc, item) => {
        if (item.isCompleted) {
          return { ...acc, complete: [...acc.complete, item] };
        }
        return { ...acc, pending: [...acc.pending, item] };
      },
      {
        complete: [],
        pending: [],
      },
    );

    setcompleteTask(total.complete);
    setpendingTask(total.pending);
  }, [state]);

  return (
    <div>
      <h4>To Do list</h4>

      <div className="counting-card">
        <span> Total Task : {state.allTodo.length}</span>
        <br />
        <span>Complted Task : {completeTask.length}</span>
        <br />
        <span>Pending Task : {pendingTask.length}</span>
        <br />
      </div>
<br />
<Filter state={state} dispatch={dispatch}/>

<br />
      <input
        type="text"
        placeholder="add task from here"
        value={currentTaskText}
        onChange={(e) => setcurrentTaskText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: nanoid(),
              title: currentTaskText,
              isCompleted: false,
            },
          });
          setcurrentTaskText("");
        }}
      >
        Add Task
      </button>

      {state.renderedData.map((item) => {
        return (
          <div className="toto-item" key={item.id}>
            <span
              className={`${item.isCompleted ? "complete-task" : "pending-task"}`}
            >
              {item.title}
            </span>
            <div className="todo-btn">
              <button
                onClick={() =>
                  dispatch({ type: "TOGGLE_TASK", payload: { id: item.id } })
                }
              >
                {item.isCompleted ? "Make Pending" : "Completed"}
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_ITEM",
                    payload: {
                      id: item.id,
                    },
                  })
                }
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
