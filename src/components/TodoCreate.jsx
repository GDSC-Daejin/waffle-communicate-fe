import React, { useState, useRef } from "react";
import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";
import Toast from "./Toast";
import { customMedia } from "../styles/globalStyles";
import { useTodoDispatch, useTodoNextId, useTodoState } from "../Context";

const Todocreate = styled.div`
  margin-top: 5%;
  padding-top: 25px;
  border-bottom: 3px solid;
  width: 100%;
  padding-bottom: 15px;
  border: 3px solid;
  background-color: ${(props) => props.theme.todo_create_bg};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: none;
`;

const Title = styled.h1`
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  font-size: 35px;
  font-weight: ${(props) => props.theme.fontWeight};

  ${customMedia.lessThan("mobile")`
    width: 80%;
    font-size: 25px;
  `}
`;

const Form = styled.form`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 45px;
`;

const ListAdd = styled.input`
  width: 400px;
  height: 40px;
  margin-bottom: 10px;

  ${customMedia.lessThan("mobile")`
    width: 80%;
    font-size: 15px;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    cursor: progress;
  `}
`;

const Plus = styled.button`
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
  const [code, setCode] = useState("");
  const titleInputRef = useRef();

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const todos = useTodoState();

  const onSubmit = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value.trim();
    const isTitleEmpty = !enteredTitle;
    const isTitleRepeated = todos.some((todo) => todo.text === enteredTitle);

    if (isTitleEmpty) {
      setCode("empty");
    } else if (isTitleRepeated) {
      setCode("repeated");
    } else {
      dispatch({
        type: "CREATE",
        todo: {
          id: nextId.current,
          text: enteredTitle,
          done: false,
        },
      });
      setCode("success");
      nextId.current += 1;
      titleInputRef.current.value = "";
    }
    setToastState(true);
  };

  return (
    /* toastState &&로 변경 */
    <>
      {toastState && <Toast setToastState={setToastState} code={code} />}
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
      </Todocreate>
    </>
  );
}

export default React.memo(TodoCreate);
