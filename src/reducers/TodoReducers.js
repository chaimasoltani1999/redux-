
//ctreate1 Reducer
export const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return { todos: action.payload };
  
      case "REMOVE_TODO":
        return { todos: action.payload };
      
      case "EDIT-TODO":
        return {todos: action.payload}
     
      default:
        return state;
    }
  };
 