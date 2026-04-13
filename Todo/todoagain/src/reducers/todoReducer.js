export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        allTodo: [...state.allTodo, action.payload],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        allTodo: state.allTodo.filter((item) => item.id != action.payload.id),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        allTodo: state.allTodo.map((item) => {
          if (item.id == action.payload.id) {
            return { ...item, isCompleted: !item.isCompleted };
          }
          return item;
        }),
      };
      case 'SET_RENDER_DATA':
        return {
            ...state,
            renderedData:action.payload
        }
    default:
      break;
  }
};
