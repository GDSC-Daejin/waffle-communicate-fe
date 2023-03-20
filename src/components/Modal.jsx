import { React, useState } from "react";
import styled from "styled-components";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useTodoDispatch, useTodoState } from "../Context";
import Toast from "./Toast";

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row wrap;
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
  height: 30%;
  text-align: center;
  text-decoration: none;
  padding: 0px 0px;
  background-color: ${(props) => props.theme.Modal_bg};
  color: black;
  font-weight: ${(props) => props.theme.fontWeight};
  border: 3px solid ${(props) => props.theme.Modal_border_bg};
`;

const Navbar = styled.div`
  background-color: ${(props) => props.theme.Modal_Navbar_bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.Modal_border_bg};
`;
const Title = styled.div`
  margin-left: 5%;
`;
const Exit = styled.div`
  margin-right: 2%;
  font-size: 34px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  margin-top: 5%;
`;
const Modalfooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 5% 0%;
`;

const Form = styled.form`
`;
const ListAdd = styled.input`
  width: 70%;
  margin-bottom: 10px;
  margin-right: 1%;
  font-size: 30px;
  height: 50px;
`;
const TodoButton = styled.button`
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.buttoncolor};
  border: 3px solid;
  border-radius: 10px;
  border-style: outset;
  cursor:pointer;
  font-size: 35px;
  margin:2px;
`;


export const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [toastState, setToastState] = useState(false);
  const [code, setcode] = useState("");

  const dispatch = useTodoDispatch();
  const todos = useTodoState();

  let exitCode = 0;
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    props.getDragMode(isOpen);
    //setToastState(false);
    setValue("");
  };

  const onChange = (e) => setValue(e.target.value);
  const checker = () => {
    if (!value || !value.replace(/\s/g, "").length) {
      setcode("empty");
      exitCode = -1;
    }
    todos.map((todo) => {
      if (todo.text == value) {
        setcode("repeated");
        exitCode = -1;
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    checker();
    if (exitCode === -1) {
      setToastState(true);
      return setValue("");
    }
    dispatch({
      type: "EDIT",
      id: props.id,
      text: value,
    });
    setToastState(true);
    setcode("success");
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
    props.getDragMode(isOpen);
  };
  const Alert = () => {
    return (
      <>
        {toastState === true ? (
          <Toast setToastState={setToastState} code={code} />
        ) : null}
      </>
    );
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
            <ModalBody>
              <Alert />
              <Form onSubmit={onSubmit}>
                <ListAdd
                  autoFocus
                  onChange={onChange}
                  value={value}
                  placeholder={props.text}
                />
                <TodoButton onClick={onSubmit}>수정하기</TodoButton>
              </Form>
            </ModalBody>
            <Modalfooter>
              <TodoButton onClick={onToggle}>완료</TodoButton>
              <TodoButton onClick={onRemove}>
                <FiTrash2 />
              </TodoButton>
            </Modalfooter>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
};
export default Modal;
