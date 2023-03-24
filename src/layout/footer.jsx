import React from "react";
import Logo from "../assets/Logo.png";
import styled from "styled-components";

const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  font-weight: bold;
  padding: 10px;
  border-top : 2px solid ${(props)=> props.theme.Color};
  transform : translateY(100%);
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
