import { React, useState } from "react";
import styled from "styled-components";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useTodoDispatch } from "../TodoContext";

export const ModalContainer = styled.div``;
export const ModalBtn = styled.button``;
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

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  z-index: 3;
  cursor: default;
`;
export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  width: 50%;
  height: 50%;
  text-align: center;
  text-decoration: none;
  padding: 0px 0px;
  background-color: ${(props) => props.theme.contextbg};
  border-radius: 30px;
  color: ${(props) => props.theme.contexttx};
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 12px;
  border-bottom: 1px solid;
`;
const Title = styled.div`
  margin-left: 10%;
`;
const Exit = styled.div`
  margin-right: 5%;
  font-size: 1.2em;
  cursor: pointer;
  &: hover {
    background-color: skyblue;
    color: blue;
  }
`;

const ModalBody = styled.div``;

const Form = styled.form``;
const ListAdd = styled.input`
  position: flex;
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
`;
export const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();

  const openModalHandler = () => {
    setIsOpen(!isOpen);
    setValue("");
  };

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!value || !value.replace(/\s/g, "").length)
      return alert("내용을 입력해주세요.");
    dispatch({
      type: "EDIT",
      id: props.id,
      text: value,
    });
    setValue("");
  };
  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: props.id,
    });
  };
  const onToggle = () => {
    
    dispatch({
      type: "COMPLETE",
      id: props.id,
    });
  };
  return (
    <>
      <TodoButton onClick={openModalHandler}>
        <FiEdit />
      </TodoButton>
      {isOpen ? (
        <ModalBackdrop>
          <ModalView>
            <Navbar>
              <Title>EDIT</Title>
              <Exit onClick={openModalHandler}>&times;</Exit>
            </Navbar>
            <Form onSubmit={onSubmit}>
              <ModalBody>
                <ListAdd
                  autoFocus
                  onChange={onChange}
                  value={value}
                  placeholder={props.text}
                />
              </ModalBody>
            </Form>
            <TodoButton onClick={onSubmit}>
              수정하기
            </TodoButton>
            <TodoButton onClick={onToggle}>
              완료
            </TodoButton>
            <TodoButton onClick={onRemove}>
              <FiTrash2 />
            </TodoButton>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
};
export default Modal;
