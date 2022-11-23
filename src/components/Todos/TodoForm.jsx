import { useState } from "react";
import styles from "./TodoForm.module.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  function onSubmithandler(event) {
    event.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <div className={styles.todoFormConteiner}>
      <h1>Todo App</h1>
      <form onSubmit={onSubmithandler}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default TodoForm;
