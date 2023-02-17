import styled from "styled-components";

export const Header = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  border-bottom: ${(props) => props.theme.border};
  padding: 10px;
`;
export const Brand = styled.h1`
  font-size: 1.5em;
  position: relative;
  left: 5%;
`;
export const Mode = styled.button`
  border: 1px #aaaaaa;
  padding: 10px;
  margin: 0px;
  background-color: #bab5a6;
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: 5%;
  position: absolute;
  top: 10%;
  
`;
