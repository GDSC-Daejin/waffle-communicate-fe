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
  background-color: #aaaaaa;
  margin: 10px;
  color: #000000;
`;
const TodoButton = styled.button`
  padding: 1% 1%;
  margin-right: 10px;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  background-color : #A2FA42;
  
`;
function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
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
      
        {!done ? 
        <WrapLeft>
          <Context>
            <TodoButton>수정</TodoButton>
            <TodoButton onClick={onRemove}>삭제</TodoButton>
           {text}
          </Context>
        </WrapLeft> :
        <WrapRight>
          <Context>
            <TodoButton onClick={onRemove}>삭제</TodoButton>
            {text}
          </Context>
        </WrapRight>
        }
  
    </>
  );
}

export default React.memo(TodoItem);
