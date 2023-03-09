import React, { useState } from "react";
import styled from "styled-components";
import { useTodoDispatch, useTodoNextId } from "../Context";
import { IoIosAdd } from "react-icons/io";

const Todocreate = styled.div`
  padding-top: 25px;
  border-bottom: 1px solid;
  width: 100%;
  padding-bottom: 15px;
  border: 3px solid;
  background-color:${(props)=> props.theme.todocreatebg};
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;
const Title = styled.h1`
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  font-size: 35px;
  font-weight:${(props)=>props.theme.fontWeight};
`;
const Form = styled.form`
  padding-bottom: 20px;
  display:flex;
  width:50%;
  padding-left:45px;
`;
const ListAdd = styled.input`
  position: flex;
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
`;
const Plus = styled.button`
  width: 50px;
  height: 40px;
  border-radius: 50%;
  font-size: 34px;
  margin-left: 5px;
  cursor: pointer;
  background-color:${(props)=> props.theme.PlusButtonbg};
  border-style:none;
  color:white;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!value || !value.replace(/\s/g, "").length)
      return alert("내용을 입력해주세요.");

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
      <Todocreate>
        <Title>To do List</Title>
        <Form onSubmit={onSubmit}>
          <ListAdd
            autoFocus
            onChange={onChange}
            value={value}
            placeholder="할 일을 입력 후, Enter 를 누르세요"
          />

          <Plus>
            <IoIosAdd onClick={onSubmit}/>
          </Plus>
        </Form>
        <Plus onClick={onSubmit}>
          <IoIosAdd />
        </Plus>
      </Todocreate>
    </>
  );
}

export default React.memo(TodoCreate);
