import React, { useEffect, useMemo, useState } from "react";
import useTodo from "../hooks/useTodo";

const Todo = () => {
  const [currentItems, setcurrentItems] = useState({
    title: "",
    category: "Pending",
    isCompleted: false,
  });

  const [filterCondition, setFilterCondition] = useState("all");

  const [statTask, setstatTask] = useState({
    total: 0,
    pending: 0,
    Completed: 0,
  });
  const {
    settodoItems,
    todoItems,
    additems,
    toggleTodo,
    deleteItems,
    showTotal,
    editTask,
    filterTask,
  } = useTodo();

  const filteredTodoItems = useMemo(() => {
    if (filterCondition === "all") {
      return todoItems;
    }
    return todoItems.filter((item) => item.category === filterCondition);
  }, [todoItems, filterCondition]);

  useEffect(() => {
    let ans = showTotal();

    setstatTask(ans);
  }, [todoItems]);

  return (
    <div>
      <div className="header">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="add todo here...."
          value={currentItems.title}
          onChange={(e) =>
            setcurrentItems({ ...currentItems, title: e.target.value })
          }
        />
        <select
          name=""
          id=""
          onChange={(e) =>
            setcurrentItems({ ...currentItems, category: e.target.value })
          }
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          onClick={() => {
            additems(currentItems);
            setcurrentItems({
              title: "",
              category: "Pending",
              isCompleted: false,
            });
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="filter">
        <span>Filter Task : </span>
        <select
          name=""
          id=""
          value={filterCondition}
          onChange={(e) => setFilterCondition(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Pending">Pending Task</option>
          <option value="Completed">Completed Task</option>
        </select>
      </div>
      <div className="showingUi">
        <div className="showStats">
          Total:{statTask.total}
          Pending:{statTask.pending}
          Completed:{statTask.Completed}
        </div>
        {filteredTodoItems.map((item, index) => {
          return (
            <div className="todoitem">
              <h3
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "none",
                }}
              >
                {item.title}
              </h3>
              <p>status:{item.category}</p>
              <button onClick={() => deleteItems(item.id)}>Delete</button>
              <button onClick={() => toggleTodo(item.id, index)}>Toggle</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
