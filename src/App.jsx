import { useEffect, useState } from "react";
import TodoComponent from "../components/TodoComponent";
import {
  addTodo,
  getAllTodo,
  updateTodo,
  deleteToDo,
} from "../utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);
  return (
    <>
      <div className="App">
        <div className="container">
          <h1>ToDo App</h1>
          <div className="top">
            <input
              type="text"
              placeholder="Add ToDos...."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div
              className="add"
              onClick={
                isUpdating
                  ? () =>
                      updateTodo(toDoId, text, setTodo, setText, setIsUpdating)
                  : () => addTodo(text, setText, setTodo)
              }
            >
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>
          <div className="list">
            {todo.map((item) => (
              <TodoComponent
                key={item._id}
                text={item.text}
                updateMode={() => updateMode(item._id, item.text)}
                deleteTodo={() => deleteToDo(item._id, setTodo)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
