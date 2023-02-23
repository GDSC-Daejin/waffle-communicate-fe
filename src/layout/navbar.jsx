<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
//import {Header, Brand, Mode} from "./navbar.styled";

const Header = styled.div`
  border-bottom: ${(props) => props.theme.border};
  padding: 10px;
  display : flex;
`;
const Brand = styled.h1`
  font-size: 1.5em;
  left: 2%;
`;
const Mode_div = styled.div `
  padding-left :89%;
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
        <Brand>소통해요</Brand>
        <Mode_div>
        <Mode onClick={() => toggleDarkMode()}>{isDarkMode ? "🌞" : "🌛"}</Mode>
        </Mode_div>
        
      </Header>

    </>
  );
}

export default Home;
=======
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
  position: sticky;
  font-size: 25px;
  text-shadow: 2px 2px 2px #000;
  transform: ${(props) => props.theme.mode_rotate};
  cursor: pointer;
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
>>>>>>> cdf43affd548f62ddf34aa865536df4c5713f94a
