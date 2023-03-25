import React from "react";
import Logo from "../assets/Logo.png";
import styled from "styled-components";

const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  font-weight: bold;
  padding: 10px;
  background-color: ${(props)=> props.theme.Footer_bg};
  border : 2px solid ${(props)=> props.theme.Color};
  border-bottom: none;
  font-size: 25px;
  position: relative;
  top: 400px;
`;

function Footer() {
  return (
    <>
      <Logos>
        <img src={Logo} alt="GDSC로고" width="150" height="130" />
        <p>Donny & James</p>
      </Logos>
    </>
  );
}

export default Footer;
