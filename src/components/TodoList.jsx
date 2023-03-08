import React from "react";
import TodoItem from "./TodoItem";
import { useTodoState } from "../Context";

function TodoList() {
  const todos = useTodoState();

  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          done={todo.done}
          key={todo.id}
        />
      ))}
    </>
  );
}

export default TodoList;
