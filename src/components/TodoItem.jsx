import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../Context";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { customMedia } from "../styles/globalStyles";

export const Wrapper = styled.div`
  width: 100%;
  grid-column-start: ${(props) => (props.done ? 2 : 1)};
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
  ${customMedia.lessThan("mobile")`
    width:93%;
    font-size:15px;
    margin-left:5px;
    margin: 6px;
    overflow: auto;
  `};
`;

const TodoButton = styled.button`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.buttoncolor};
  font-size: 35px;
  border: 3px solid;
  border-radius: 10px;
  border-style: outset;
  position: relative;
  left: 2px;
  margin: 2px;
  ${customMedia.lessThan("mobile")`
    width:30%;
    font-size:12px;
    position:relative;
    left:-3px;
    text-align:center;
  `};
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
    alert("삭제되었습니다.");
  };

  const Drag_Started = (e, id) => {
    e.dataTransfer.setData("drag_startID", id);
  };

  return (
    <Wrapper done={done}>
      <Context draggable={dragMode} onDragStart={(e) => Drag_Started(e, id)}>
        {!done && (
        <Modal id={id} text={text} getDragMode={getDragMode} />
        )}
        <TodoButton onClick={onRemove}>
          <FiTrash2 />
        </TodoButton>
        {text}
      </Context>
    </Wrapper>
  );
}

export default React.memo(TodoItem);