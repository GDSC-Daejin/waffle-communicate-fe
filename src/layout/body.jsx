import React from "react";
import styled from "styled-components";
//import {Header, Brand, Mode} from "./navbar.styled";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";


const Container1 = styled.div`
  display: inline-flex;
  width: 100%;
  padding-bottom: 10px;
`;
const WrapLeft = styled.div`
  border-right: 2px solid;
  width: 50%;
`;
const WrapRight = styled.div`
  width: 50%;
`;
const Status = styled.h1`
  font-size: 30px;
  padding-top: 4%;
  margin-left: 45%;
`;
const Container2 = styled.div`
  display: grid;
  grid-auto-flow: dense;
  width: 100%;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
`;
function Body() {
  return (
    <>
      <TodoCreate/>
      <Container1>
        <WrapLeft>
          <Status>진행 중 ~</Status>
        </WrapLeft>
        <WrapRight>
          <Status>완료 !</Status>
        </WrapRight>
      </Container1>
      <Container2>
        <TodoList />
      </Container2>
    </>
  );
}

export default Body;
