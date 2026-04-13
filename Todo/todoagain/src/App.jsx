import React, { useReducer } from "react";
import Todo from "./components/Todo";
import { todoReducer } from "./reducers/todoReducer";

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, {
    allTodo: [],
    renderedData:[],
  });

  return (
    <div>
      <Todo state={state} dispatch = {dispatch} />
    </div>
  );
};

export default App;
