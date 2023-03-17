import React from "react";
import styled from "styled-components";
//import {Header, Brand, Mode} from "./navbar.styled";

const Header = styled.div`
  border-bottom: ${(props) => props.theme.border};
  padding: 10px;
  display : flex;
  border: 2px solid;
  background-color: ${(props)=> props.theme.Header_bg};
  font-weight:${(props)=>props.theme.fontWeight};
  justify-content:space-between;
`;

const Brand = styled.h1`
  font-size: 29px;
`;
const Mode_div = styled.div `
 
`;

const Mode = styled.button`
  border: 1px #aaaaaa;
  padding: ${(props) => props.theme.mode_padding};
  background-color: ${(props) => props.theme.boxcolor};
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 25px;
  text-shadow: 2px 2px 2px #000;
  transform: ${(props) => props.theme.mode_rotate};
  cursor: pointer;
`;

function Home({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <Header>

        <Brand>소통해요 🙌</Brand>
        <Mode_div>
          <Mode onClick={() => toggleDarkMode()}>
            {isDarkMode ? "🌞" : "🌛"}
          </Mode>
        </Mode_div>
      </Header>
    </>
  );
}

export default Home;
