import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const Wrapper1 = styled.div`
  padding-top: 25px;
  border-bottom: 1px solid;
  width: 100%;
  padding-bottom: 15px;
`;
const Title = styled.h1`
  margin-left: 42%;
  width: 300px;
  padding-bottom: 20px;
  font-size: 30px;
  position: flex;
`;
const Form = styled.form`
  margin-left: 35%;
  width: 40%;
  padding-bottom: 20px;
  position: flex;
`;
const ListAdd = styled.input`
  position: flex;
  margin-left: 0%;
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
`;
const Plus = styled.button`
  position: flex;
  width: 50px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) return alert("내용을 입력해주세요.");
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    nextId.current += 1;
    setValue("");
  };

  return (
    <>
      <Wrapper1>
        <Title>To do List</Title>
        <Form onSubmit={onSubmit}>
          <ListAdd
            autoFocus
            onChange={onChange}
            value={value}
            placeholder="할 일을 입력 후, Enter 를 누르세요"
          />
          <Plus>+</Plus>
        </Form>
      </Wrapper1>
    </>
  );
}

export default React.memo(TodoCreate);
