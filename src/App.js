import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction ,EditTodoAction, SaveTodoAction} from "./actions/TodoActions";

function App() {
  //create a local state of component
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  //access to the state
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  //make the hundleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };
   // Handle entering edit mode for a post
  const handleEdit = (t) => {
    dispatch(EditTodoAction(t))
  };
 
   // Handle saving an edited title
//  const handleSave = (t)=> {
//   dispatch(SaveTodoAction())
//  }
  return (
    <div className="App">
      <header className="App-header">
        <h2> Todo List </h2>
        <form onSubmit={handleSubmit}>
         <div>
        
          <br></br>
          <input
            placeholder="Enter a Todo"
            style={{
              width: 500,
              padding: 20,
              borderRadius: 20,
              border: "none",
              fontSize: 30,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 20,
              marginLeft: 20,
            }}
          >
            Go{" "}
           
          </button>
          </div>
        </form>

        <ul className="allTodos">
          {/*rendering the todos in the component by mapping */}

          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoText">{t.todo}</span>
                <button
                  style={{
                    borderRadius: 30,
                    padding: 10,
                    border: "1px solid white",
                    color: "white",
                    backgroundColor: "black",
                  }}
                  onClick={() => removeHandler(t)}
                >
                  Delete
                </button>
                <button
                        type="button"
                        className="btn_add"
                        onClick={() => handleEdit(t)}
                      >
                        Edit
                      </button>
                
                      <button
                      type="button"
                      className="btn_add"
                      // onClick={() => handleSave(post.id)}
                    >
                      Save
                    </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;