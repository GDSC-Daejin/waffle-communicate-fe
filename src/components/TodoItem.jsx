import React from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../TodoContext";

const WrapLeft = styled.div`
  width: 100%;
  grid-column-start: 1;
`;
const WrapRight = styled.div`
  width: 100%;
  grid-column-start: 2;
`;

const Context = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.contextbg};
  margin: 10px;
  color: ${(props) => props.theme.contexttx};
  font-size: 28px;
`;

const TodoButton = styled.button`
  padding: 1% 1%;
  margin-right: 10px;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  background-color: #a2fa42;
  font-size: 30px;
`;
function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    dispatch({
      type: "COMPLETE",
      id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  return (
    <>
      {!done ? (
        <WrapLeft>
          <Context>
            <TodoButton>수정</TodoButton>
            <TodoButton onClick={onRemove}>❌</TodoButton>
            <TodoButton onClick={onToggle}>❤️</TodoButton>
            {text}
          </Context>
        </WrapLeft>
      ) : (
        <WrapRight>
          <Context>
            <TodoButton onClick={onRemove}>❌</TodoButton>
            <TodoButton onClick={onToggle}>💔</TodoButton>

            {text}
          </Context>
        </WrapRight>
      )}
    </>
  );
}

export default React.memo(TodoItem);
