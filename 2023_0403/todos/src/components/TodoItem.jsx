import React from "react";
const TodoItem = ({ todos, onDel, onToggle }) => {
  const { id, text, done } = todos;

  return (
    <div>
      <li className={done ? "on" : ""}>
        <span onClick={() => onToggle(id)}></span>
        <em onClick={() => onToggle(id)}>{text}</em>
        <button onClick={() => onDel(id)}>삭제</button>
      </li>
    </div>
  );
};

export default TodoItem;
