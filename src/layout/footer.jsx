import React from "react";
import Logo from "./img/Logo.png";
import styled from "styled-components";

export const Logos = styled.div`
  display:flex;
  justify-content:center;
`;


function Footer (){
  return(
    <>
      <Logos>
          <img src={Logo} width="350" alt="GDSC로고" />
      </Logos>
    </>
  );
}

export default Footer;