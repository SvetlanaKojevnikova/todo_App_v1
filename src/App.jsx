import { useState } from "react";
import TodoList from "./components/todos/TodoList";
import TodoForm from "./components/Todos/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };
  return (
    <div className="App">
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
