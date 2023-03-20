import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../Context";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";

export const Wrapper_uncomplete = styled.div`
  width: 100%;
  grid-column-start: 1;
`;

export const Wrapper_complete = styled.div`
  width: 100%;
  grid-column-start: 2;
`;

const Context = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.contextbg};
  margin: 15px;
  color: ${(props) => props.theme.contexttx};
  font-size: 28px;
  cursor: grab;
  border-radius: 30px;
  border: 2px solid ${(props) => props.theme.contextbg};
`;

const TodoButton = styled.button`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.buttoncolor};
  font-size: 35px;
  border: 3px solid;
  border-radius: 10px;
  border-style: outset;
  position:relative;
  left:2px;
  margin:2px;
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const [dragMode, setDragMode] = useState(true);
  const getDragMode = (prop) => {
    setDragMode(prop);
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
        <Wrapper_uncomplete>
          <Context
            draggable={dragMode}
            onDragStart={(e) => Drag_Started(e, id)}
          >
            <Modal id={id} text={text} getDragMode={getDragMode} />
            <TodoButton onClick={onRemove}>
              <FiTrash2 />
            </TodoButton>
            {text}
          </Context>
        </Wrapper_uncomplete>
      ) : (
        <Wrapper_complete>
          <Context
            draggable={dragMode}
            onDragStart={(e) => Drag_Started(e, id)}
          >
            <TodoButton onClick={onRemove} getDragMode={getDragMode}>
              <FiTrash2 />
            </TodoButton>

            {text}
          </Context>
        </Wrapper_complete>
      )}
    </>
  );
}

export default React.memo(TodoItem);
