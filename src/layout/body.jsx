import React from "react";
import styled from "styled-components";
//import {Header, Brand, Mode} from "./navbar.styled";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";
import { useTodoDispatch } from "../TodoContext";


const Container1 = styled.div`
  display: flex;
  width: 100%;
  border: 3px solid;
`;
const WrapLeft = styled.div`
  border-right: 1px solid;
  width: 50%;
`;
const WrapRight = styled.div`
  width: 50%;
`;
const Status = styled.h1`
  font-size: 30px;
  padding : 2% 0px;

  text-align:center;
`;
const Container2 = styled.div`
  display: grid;
  grid-auto-flow: dense;
  width: 100%;
  height: 150%;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  border: 1px solid;
`;
function Body() {
  const dispatch = useTodoDispatch();
  const DraggingOver = (e) => {
    e.preventDefault();
    //console.log("Dragging Over now");
  };
  const dragDropped = (e) => {
    //console.log("You have dropped!");
    const transferedTodoID1 = parseInt(e.dataTransfer.getData("drag_startID"));

    dispatch({
      type: "COMPLETE",
      id: transferedTodoID1,
    });
  };
  return (
    <>
      <TodoCreate />
      <Container1>
        <WrapLeft>
          <Status>진행 중 ~</Status>
        </WrapLeft>
        <WrapRight>
          <Status>완료 !</Status>
        </WrapRight>
      </Container1>
      <Container2  droppable
            onDragOver={(e) => DraggingOver(e)}
            onDrop={(e) => dragDropped(e)}>
        <TodoList />
      </Container2>
    </>
  );
}

export default Body;
