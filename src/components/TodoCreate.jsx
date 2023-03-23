import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoNextId, useTodoState } from "../Context";
import { IoIosAdd } from "react-icons/io";
import Toast from "./Toast";

const Todocreate = styled.div`
  margin-top: 5%;
  padding-top: 25px;
  border-bottom: 1px solid;
  width: 100%;
  padding-bottom: 15px;
  border: 3px solid;
  background-color: ${(props) => props.theme.todo_create_bg};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  font-size: 35px;
  font-weight: ${(props) => props.theme.fontWeight};
`;
const Form = styled.form`
  padding-bottom: 20px;
  display: flex;
  width: 50%;
  padding-left: 45px;
`;
const ListAdd = styled.input`
  position: flex;
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
  ${({ disabled }) =>
    disabled &&
    `
    cursor: progress;
    `}
`;
const Plus = styled.button`
  width: 50px;
  height: 40px;
  border-radius: 50%;
  font-size: 34px;
  margin-left: 5px;
  cursor: pointer;
  background-color: ${(props) => props.theme.Plus_Button_bg};
  border-style: none;
  color: white;
  ${({ disabled }) =>
    disabled &&
    `
  cursor: progress;
  `}
`;

function TodoCreate() {
  const [toastState, setToastState] = useState(false);
  const [code, setcode] = useState("");
  const titleInputRef = useRef();

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const todos = useTodoState();

  const onSubmit = (e) => {
    e.preventDefault();
    let exitCode = 0;
    const enteredTitle = titleInputRef.current.value;
    const resetTitle = () => {
      titleInputRef.current.value = "";
    };
    setToastState(true);
    if (!enteredTitle || !enteredTitle.replace(/\s/g, "").length) {
      setcode("empty");
    } else {
      todos.map((todo) => {
        if (todo.text == enteredTitle) {
          setcode("repeated");
          return (exitCode = -1);
        }
      });
      if (exitCode === -1) return resetTitle();

      dispatch({
        type: "CREATE",
        todo: {
          id: nextId.current,
          text: enteredTitle,
          done: false,
        },
      });
      setcode("success");
      nextId.current += 1;
      return resetTitle();
    }
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
      <Alert />
      <Todocreate>
        <Title>To do List</Title>
        <Form onSubmit={onSubmit}>
          <ListAdd
            autoFocus
            placeholder="할 일을 입력 후, Enter 를 누르세요"
            ref={titleInputRef}
            disabled={toastState}
          />
          <Plus disabled={toastState}>
            <IoIosAdd onClick={onSubmit} />
          </Plus>
        </Form>
        <Alert />
      </Todocreate>
    </>
  );
}

export default React.memo(TodoCreate);
