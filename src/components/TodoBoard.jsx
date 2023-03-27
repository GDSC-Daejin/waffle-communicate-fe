import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoDispatch, useTodoState } from "../Context";
import Toast from "./Toast";
import { customMedia } from "../styles/globalStyles";

const ContainerStatus = styled.div`
  display: flex;
  width: 100%;
  border: 3px solid;
  background-color: ${(props) => props.theme.contain_status_bg};
`;

const WrapperUncomplete = styled.div`
  border-right: 2px solid;
  width: 50%;
`;

const WrapperComplete = styled.div`
  width: 50%;
`;

const Status = styled.h1`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
  font-size: 1.5rem;
  padding: 2% 6%;
  font-weight: bold;
  ${customMedia.lessThan('mobile')`
		width: 100%;
		font-size: 15px;
	`}
`;

const ContainerBoard = styled.div`
  display: grid;
  grid-auto-flow: dense;
  width: 100%;
  height: 150%;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  background-color: ${(props) => props.theme.todo_create_bg};
  border: 2px solid;
  border-top: none;
  margin-bottom: 500px;
`;

function TodoBoard() {
  const [toastState, setToastState] = useState(false);
  const [code, setCode] = useState("");
  const dispatch = useTodoDispatch();
  const todos = useTodoState();
  const [uncomplete, complete] = [
    todos.filter((todo) => !todo.done),
    todos.filter((todo) => todo.done),
  ];

  const handleDraggingOver = (e) => {
    e.preventDefault();
  };

  const handleDragDropped = (e) => {
    const transferedTodoID1 = parseInt(e.dataTransfer.getData("drag_startID"));
    setToastState(true);
    setCode("success");
    dispatch({
      type: "COMPLETE",
      id: transferedTodoID1,
    });
  };

  const renderTodoItems = () =>
    todos.map((todo) => (
      <TodoItem
        id={todo.id}
        text={todo.text}
        done={todo.done}
        key={todo.id}
      />
    ));

  const renderAlert = () =>
    toastState ? <Toast setToastState={setToastState} code={code} /> : null;

  return (
    <>
      {renderAlert()}
      <ContainerStatus>
        <WrapperUncomplete>
          <Status>
            <div>UNCOMPLETE</div>
            <div>({uncomplete.length})</div>
          </Status>
        </WrapperUncomplete>
        <WrapperComplete>
          <Status>
            <div>COMPLETE</div>
            <div>({complete.length})</div>
          </Status>
        </WrapperComplete>
      </ContainerStatus>
      <ContainerBoard
        droppable
        onDragOver={handleDraggingOver}
        onDrop={handleDragDropped}
      >
        {renderTodoItems()}
      </ContainerBoard>
    </>
  );
}

export default TodoBoard;
