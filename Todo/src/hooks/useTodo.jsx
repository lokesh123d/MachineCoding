import React, { useState } from "react";

const useTodo = () => {
  const [todoItems, settodoItems] = useState([]);

  function additems(item) {
    let copyitems = [...todoItems];
    copyitems.push({ ...item, id: Date.now() });
    settodoItems(copyitems);
  }
  function deleteItems(id) {
    settodoItems(todoItems.filter((val) => val.id != id));
  }
  function toggleTodo(id) {
    settodoItems(
      todoItems.map((ele) => {
        if (ele.id == id) {
          return { ...ele, isCompleted: !ele.isCompleted };
        }
        return ele;
      }),
    );
  }

  function showTotal() {
    let total = todoItems.length;
    // console.log(todoItems.length);
    let pending = 0;
    let Completed = 0;
    todoItems.map((ele) => {
      if (ele.category == 'Pending') {
        pending += 1;
      } else {
        Completed += 1;
      }
    });
let result ={
    total,pending,Completed
}
    return result;
  }


  function editTask(editItems,index){

  }

  function filterTask(condition){
    if(condition=="") return ;
    if(condition=='all') return;



let filtereditems =  todoItems.filter((item)=>item.category == condition);  
  }

  return {
    todoItems,
    settodoItems,
    additems,
    deleteItems,
    toggleTodo,
    showTotal,
    editTask,
    filterTask
  };
};

export default useTodo;
