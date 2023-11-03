//create a nested arrow function
export const AddTodoAction = (todo) => (dispatch, getState) => {
    const {
      Todo: { todos },
    } = getState();
    //create addTodo action
    const hasTodo = todos.find((i) => i.todo === todo);
  
    if (!hasTodo && todo !== "") {
      dispatch({
        type: "ADD_TODO",
        payload: [{ id: todo, todo }, ...todos],
      });
    }
  };
  
  //create remove todoAction
  export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
      Todo: { todos },
    } = getState();
  
    dispatch({
      type: "REMOVE_TODO",
      payload: todos.filter((t) => t.id !== todo.id),
    });
  };
//   create edit todoAction

export const EditTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: { todos },
  } = getState();
  const editTodo =todos.map((el)=>el.todo === todo);
  if (!editTodo && todo !==""){
    dispatch({
      type:"EDIT-TODO",
      payload:editTodo
    })
  }
}
  
   
  


  
