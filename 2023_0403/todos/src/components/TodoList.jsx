export default function TodoList({ todos, removeTodo, toggleTodo }) {
  console.log(todos);

  const itemList = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
    />
  ));

  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
}

function TodoItem({ todo: { text, done, id }, toggleTodo, removeTodo }) {
  return (
    <li
      className="Item-box"
      style={{
        textDecoration: done && "line-through",
      }}
      onClick={() => toggleTodo(id)}
    >
      {text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(id);
        }}
      >
        삭제
      </button>
    </li>
  );
}
