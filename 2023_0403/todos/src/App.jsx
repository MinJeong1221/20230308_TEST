import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

let nextId = 4;

export default function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (text) => {
    setTodos(todos.concat({ id: nextId++, text: text, done: false }));
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="main-v">
      <TodoHeader className="header" todos={todos} />

      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />

      <TodoInput className="input" createTodo={createTodo} />
    </div>
  );
}
