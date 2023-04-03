import React, { useEffect } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoState } from "../state/todos";
import Button from "./Button";
import "./TodoList.css";

function TodoList() {
  const todos = useTodoState();

  useEffect(() => {
    console.log("렌더링!");
  });

  const itemList = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return (
    <div>
      <ul>{itemList}</ul>{" "}
    </div>
  );
}

function TodoItem({ todo: { text, done, id } }) {
  const dispatch = useTodoDispatch();

  return (
    <ItemBox
      className="Itme-box"
      done={done}
      onClick={() => dispatch({ type: "TOGGLE_TODO", id })}
    >
      <span className="sp">{text}</span>
      <Button
        className="btn-D"
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ type: "REMOVE_TODO", id });
        }}
      >
        삭제
      </Button>
    </ItemBox>
  );
}

const ItemBox = styled.li`
  span {
    text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  }
`;

export default React.memo(TodoList);
