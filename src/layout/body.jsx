import React from "react";
import styled from "styled-components";
//import {Header, Brand, Mode} from "./navbar.styled";

const Wrapper1 = styled.div`
  padding-top: 25px;
  border-bottom: 1px solid;
  width: 100%;
  padding-bottom: 15px;
`;
const Title = styled.h1`
  margin-left: 45%;
  width: 300px;
  padding-bottom: 20px;
  font-size: 30px;
  position: flex;
`;
const ListAdd = styled.input`
  position: flex;
  margin-left: 25%;
  width: 50%;
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
`;

const Container1 = styled.div`
  display: inline-flex;
  width: 100%;
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
const Context = styled.div`

  padding: 10px;
  display: block;
  background-color: #aaaaaa;
  margin: 10px;
`;
function Body() {
  return (
    <>
      <Wrapper1>
        <Title>To do list</Title>
        <ListAdd />
        <Plus>➕</Plus>
      </Wrapper1>
      <Container1>
        <WrapLeft>
          <Status>진행 중</Status>
          <Context>dd</Context>
          <Context>dd</Context>
          <Context>dd</Context>
          <Context>dd</Context>
          <Context>dd</Context>
          <Context>dd</Context>
        </WrapLeft>
        <WrapRight>
          <Status>완료 !</Status>
          <Context>dd</Context>
          <Context>dd</Context>
          <Context>dd</Context>
          <Context>dd</Context>
          <Context>dd</Context>
          <Context>dd</Context>
          <Context>dd</Context>
          <Context>dd</Context>
          
        </WrapRight>
      </Container1>
    </>
  );
}

export default Body;
