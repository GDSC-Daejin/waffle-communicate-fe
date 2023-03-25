import React from "react";
import Logo from "../assets/Logo.png";
import styled from "styled-components";

const Footers = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 22px;
  font-weight: bold;
  background-color: ${(props)=> props.theme.Footer_bg};
  border : 2px solid ${(props)=> props.theme.Color};
  border-bottom: none;
  font-size: 25px;
  /* position: relative;
  top: 460px; */
  padding: 8px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80%;
  margin-left : auto; 
  margin-right : auto;
`;


function Footer() {
  return (
    <>
      <Footers>
        <img src={Logo} alt="GDSC로고" width={80} height={48}/>
        <p>Donny & James</p>
      </Footers>
    </>
  );
}

export default Footer;