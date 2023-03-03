import React, { Component } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../TodoContext";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const WrapLeft = styled.div`
  width: 100%;
  grid-column-start: 1;
  border-right: 1px solid;
`;
const WrapRight = styled.div`
  width: %;
  grid-column-start: 2;
  border-left: 1px solid;
`;

const Context = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.contextbg};
  margin: 15px;
  color: ${(props) => props.theme.contexttx};
  font-size: 28px;
  cursor: pointer;
  border-radius: 30px;
  border: 2px solid ${(props) => props.theme.contextbg};
`;

const TodoButton = styled.button`
  padding: 1% 1%;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  background-color: ${(props) => props.theme.buttoncolor};
  font-size: 30px;
  border: 3px solid;
  border-radius: 10px;
  border-style: outset;
  width: 10%;
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
  const Drag_Started = (e, id) => {
    //console.log("Drag has started", id);
    e.dataTransfer.setData("drag_startID", id);
  };

  return (
    <>
      {!done ? (
        <WrapLeft>
          <Context draggable onDragStart={(e) => Drag_Started(e, id)}>
            <TodoButton>
              <FiEdit />
            </TodoButton>
            <TodoButton onClick={onRemove}>
              <FiTrash2 />
            </TodoButton>

            {text}
          </Context>
        </WrapLeft>
      ) : (
        <WrapRight>
          <Context draggable onDragStart={(e) => Drag_Started(e, id)}>
            <TodoButton onClick={onRemove}>
              <FiTrash2 />
            </TodoButton>

            {text}
          </Context>
        </WrapRight>
      )}
    </>
  );
}

export default React.memo(TodoItem);
