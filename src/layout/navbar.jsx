import React from "react";
import styled from "styled-components";
//import {Header, Brand, Mode} from "./navbar.styled";

const Header = styled.div`
  border-bottom: ${(props) => props.theme.border};
  padding: 10px;
`;
const Brand = styled.h1`
  font-size: 1.5em;
  position: relative;
  left: 2%;
`;
const Mode = styled.button`
  border: 1px #aaaaaa;
  padding: ${(props) => props.theme.mode_padding};
  background-color: ${(props) => props.theme.boxcolor};
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: 5%;
  position: fixed;
  top: 1%;
  font-size: 25px;
  text-shadow: 2px 2px 2px #000;
  transform: ${(props) => props.theme.mode_rotate};
`;


function Home({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <Header>
        <Brand>소통해요</Brand>
        <Mode onClick={() => toggleDarkMode()}>{isDarkMode ? "🌞" : "🌛"}</Mode>
      </Header>

    </>
  );
}

export default Home;
