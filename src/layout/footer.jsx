import React from "react";
import Logo from "./img/Logo.png";
import styled from "styled-components";

const Logos = styled.div`
  display:flex;
  justify-content: space-between;
  font-size:22px;
  font-weight: bold;
  padding:10px;
`;


function Footer (){
  return(
    <>
      <Logos>
          <img src={Logo} alt="GDSC로고" width="150" height="130"/>
          <p>Donny & James</p>
      </Logos>
    </>
  );
}

export default Footer;